import express from 'express';
import { User } from '../models/user.model';
import { Product, ECGTopic } from '../models/products.model';
import fs from 'fs';
import { getEmailFromToken } from '../services/functions';
import { collections } from '../services/database.service';
require('dotenv').config();

const router = express.Router();

router.route('/topics').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        const user = await collections.users.findOne({ email }) as unknown as User;
        const userEcgTopics = user.products.ECGs.topics;
        res.json(userEcgTopics);
    }

    catch (error) { console.log(error); }

});

// router.route("/updatechat").post((req, res) => {
//     Product.updateOne(
//         { "name": "Finals", "questions._id": mongoose.Types.ObjectId(req.body.questionID) },
//         { $set: { "questions.$.Chat": req.body.chat } }
//     ).catch(console.log);
// })

router.route('/finishsession').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        await collections.users.updateOne(
            { email },
            { $set: { "products.ECGs.topics": req.body.topics.map((t: ECGTopic) => { return { ...t, selected: false } } ) } }
        );
    }

    catch (error) { console.log(error); }
    
});

//----------------------------------------------------------------------------------------------------

const ecgTopics = JSON.parse(fs.readFileSync(__dirname + '/../json/ecgTopics.json', 'utf8'));

// add finals bundle to my dev account
// router.route('/DEVELOPMENT_RESET_ECG_TOPICS').get((req, res) => {
//     User.updateMany({}, { "$set": { "products.ECGs.topics": ecgTopics } }).catch(console.log);
//     Product.update({ name: "ECGs" }, { "$set": { "topics": ecgTopics } }).catch(console.log);
//     res.json("ECGtopics reset for all users :-)")
// });

export default router;


