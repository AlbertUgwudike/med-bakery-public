import express from "express";
import Stripe from "stripe";
import { __stripe_key__, __stripe_secret__ } from "../constants";
import { collections } from "../services/database.service";

const router = express.Router();

require("dotenv").config();

const stripe = new Stripe(__stripe_key__, { apiVersion: "2020-08-27" });

router.route("/create-checkout-session").post(async (req, res) => {
    console.log("creating checkout session");
    const { success_url, cancel_url } = req.body;

    try {
        const product = await stripe.products.create({ name: "OSCE Subscription - One Year" });
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 4500,
            currency: "gbp",
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: price.id,
                    quantity: 1,
                },
            ],
            mode: "payment",
            billing_address_collection: "required",
            success_url: success_url,
            cancel_url: cancel_url,
        });

        res.json(session.url).status(200);
    } catch (error) {
        console.log(error);
    }
});

const fulfillOrder = (session: Stripe.Event.Data.Object) => {
    const { email, address } = (session as any).customer_details;
    collections.users.updateOne(
        { email },
        { $set: { purchased_osce: true, billing_address: address } }
    );
    // console.log("Fulfilling order", session);
};

router.post("/webhook", express.raw({type: 'application/json'}), (request, response) => {
    const payload = request.body;
    console.log(payload);
    const sig = request.headers["stripe-signature"];

    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, __stripe_secret__);
    } catch (err) {
        console.log("---- event initialisatio errorm ----", err);
        return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;

        // Fulfill the purchase...
        fulfillOrder(session);
    }

    response.status(200).send();
});

export default router;
