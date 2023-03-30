import express from "express";
import { User, generateNewUser } from "../types/userTypes";
import { getEmailFromToken } from "../functions";
import Analytics from "analytics-node";
import { collections } from "../services/database.service";

const analytics = new Analytics("dErQcszlJ3aotTZhC6GTNNKgM7axL1OL");
const router = express.Router();

router.route("/googlelogin").post(async (req, res) => {
    //cheeky null check
    if (!req.body.token) return res.json({ success: false });

    try {
        const email = (await getEmailFromToken(req.body.token)) as string;
        if (email === "") throw "-- email extraction failed --";

        const user = await collections.users.findOne({ email });

        analytics.identify({ userId: email, traits: { email } });
        analytics.track({ userId: email, event: `${email} Logged In` });

        // if user didnt already exist insert it
        if (!user) await collections.users.insertOne(generateNewUser(email));

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false, error });
    }
});

router.route("/osce_details").all(async (req, res) => {
    // cheeky null check
    if (!req.query.token && !req.body.token) {
      return res.json({ success: false, answeredStations: [], purchasedOsce: false });
    }
  
    try {
      const email = (await getEmailFromToken(req.query.token || req.body.token)) as string;
      if (email === "") throw "-- email extraction failed --";
  
      const user = await collections.users.findOne({ email });
      res.json({
        success: true,
        answeredStations: user.answeredOsceStations,
        purchasedOsce: user.purchased_osce,
      });
    } catch (error) {
      console.error("this", error);
      res.json({ success: false, answeredStations: [], purchasedOsce: false, error });
    }
  });
  

// router.route("/ADD_DATES").get(async (req, res) => {
//     console.log("we did it");
//     collections.users.updateOne(
//         {},
//         {
//             $set: {
//                 "answeredOsceStations.$[].dateAnswered": new Date(),
//             },
//         }
//     );
// });

export default router;
