import express from 'express';
import { FinalsProduct, Product } from '../models/products.model';
import { collections } from '../services/database.service';
import { getEmailFromToken, updateGlobalState } from '../services/functions';
import { parseFinalsCsv } from '../services/questioncsvfunctions';
import { parseTextBookCsv } from '../services/textbookcsvfunctions';
import { parseLearningCsv } from '../services/learningcsvfunctions';
import { User } from '../models/user.model';
import fs from 'fs';
require('dotenv').config();

const router = express.Router();

router.route("/uploadQuestionsAndPoints").post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });

        // this should eventually be replaced with the google API (interestingly dont need to push csv to server to do this)
        const rawQuestions = await parseFinalsCsv();
        const learningPoints = await parseLearningCsv();

        // copy over the chat from each database question
        const finalsProduct = await collections.products.findOne({ "name": "Finals" }) as unknown as FinalsProduct;
        const oldQuestions = finalsProduct.questions;

        // copy over all app modifiable data before uploading to master product
        const questions = updateGlobalState(rawQuestions, oldQuestions)

        // replace all master questions and learning points
        await collections.products.updateOne(
            { "name": "Finals" },
            { $set: { "questions": questions, "learningPoints": learningPoints } } 
        );

        res.json({ success: true, error: "" });
    }

    catch (error) { res.json({ success: false, error }) }

});

router.route("/updatetextbook").post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });

        // this should eventually be replaced with the google API (interestingly dont need to push csv to server to do this)
        const textBookContents = await parseTextBookCsv()

        // replace all master questions and learning points
        await collections.products.updateOne(
            { "name": "Finals" },
            { $set: { "textBook": textBookContents } } 
        );

        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

});

router.route("/downloadUsers").post( async (req, res) => {
    console.log("dowloading users ....");

    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });
        const users = await collections.users.find({}).toArray() as unknown as User[];
        fs.writeFileSync(__dirname + "/../databaseContents/users.json", JSON.stringify(users, null, 4), "utf-8")
        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

    console.log("download complete");

});

router.route("/downloadProducts").post( async (req, res) => {
    console.log("dowloading users ....");

    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });
        const products = await collections.products.find({}).toArray() as unknown as Product[];
        fs.writeFileSync(__dirname + "/../databaseContents/products.json", JSON.stringify(products, null, 4), "utf-8")
        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

    console.log("download complete");

});

router.route("/uploadProducts").post( async (req, res) => {
    console.log("uploading products ....");

    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });
        const products = JSON.parse(fs.readFileSync(__dirname + "/../databaseContents/products.json", "utf-8")) as unknown as Product[]
        await collections.products.insertMany(products);
        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

    console.log("upload complete");

});

router.route("/uploadUsers").post( async (req, res) => {
    console.log("uploading users ....");

    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });
        const users = JSON.parse(fs.readFileSync(__dirname + "/../databaseContents/users.json", "utf-8")) as unknown as User[]
        await collections.users.insertMany(users);
        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

    console.log("upload complete");

});

router.route("/homepageQuestion").post( async (req, res) => {
    console.log("downloading question ....");

    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") res.json({ success: false, error: "access unauthorised" });
        const finalsProduct = await collections.products.findOne({ name: "Finals" }) as unknown as FinalsProduct;
        fs.writeFileSync(__dirname + "/../databaseContents/example.json", JSON.stringify(finalsProduct.questions[5], null, 4), "utf-8")
        res.json({ success: true, error: "" });
    }

    catch (error) { console.log(error); res.json({ success: false, error }); }

    console.log("download complete");

});


export default router;


