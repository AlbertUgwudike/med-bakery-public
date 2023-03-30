import express from 'express';
import { collections } from '../services/database.service';
import { getEmailFromToken, updateGlobalState } from '../services/functions';
import { parseTextBookCsv } from '../services/textbookcsvfunctions'
import { ObjectId } from 'mongodb';
import fs from 'fs';
require('dotenv').config();

const router = express.Router();

router.route("/synccsv").post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        if (email !== "albertu98@googlemail.com") return;

        // this should eventually be replaced with the google API (interestingly dont need to push csv to server to do this)
        const textBookContents = await parseTextBookCsv()

        // replace all master questions and learning points
        await collections.products.updateOne(
            { "name": "Finals" },
            { $set: { "textBook": textBookContents } } 
        );

        res.json("upload successful");
    }

    catch (error) { console.log(error) }

});

//----------------------------------------------------------------------------------------------------




export default router;


