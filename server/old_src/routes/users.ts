import express from 'express';
import { User } from '../models/user.model';
import fs from 'fs';
import { getEmailFromToken, updateUserQuestionsState, updateUserLearningPtsState } from '../services/functions';
import Analytics from 'analytics-node';
import { collections } from '../services/database.service';
import { ObjectId } from 'mongodb';
import { FinalsQuestion } from '../models/question.model';
import { FinalsProduct } from '../models/products.model';
require('dotenv').config();

const analytics = new Analytics('dErQcszlJ3aotTZhC6GTNNKgM7axL1OL');
const router = express.Router();

const getEmptyUser = () => JSON.parse(fs.readFileSync(__dirname + '/../json/emptyUser.json', 'utf8'));

router.route("/googlelogin").post( async (req, res) => {
    //cheeky null check
    if (!req.body.token) return res.json({ success: false });

    try {
        const email = await getEmailFromToken(req.body.token) as string;
        const user = await collections.users.findOne({ email }) as unknown as User;

        analytics.identify({userId: email, traits: { email }});
        analytics.track({ userId: email, event: `${email} Logged In` });

        const userProper = user ? user : { ...getEmptyUser(), email: email };

        // if user didnt already exist insert it
        if (!user) await collections.users.insertOne(userProper);

        // copy over user-level state
        const userFinalsProduct = ( await collections.users.findOne({ email }) ).products.Finals as unknown as FinalsProduct;
        const masterFinalsProduct = ( await collections.products.findOne({ name: "Finals" }) ) as unknown as FinalsProduct;

        const questions = updateUserQuestionsState( masterFinalsProduct.questions, userFinalsProduct.questions );
        const learningPoints = updateUserLearningPtsState( masterFinalsProduct.learningPoints, userFinalsProduct.learningPoints )

        await collections.users.updateOne(
            { email: email }, 
            { $set: { "products.Finals.questions": questions, "products.Finals.learningPoints": learningPoints } } 
        );

        res.json({ success: true });
    }

    catch (error) { console.log(error); }
});

router.route('/finishsession').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        
        for(const q of req.body.questions as FinalsQuestion[]) {

            // replacing the question to keep track fo answered status and aid question retrieval, can be optimised
            await collections.users.updateOne(
                { "email": email, "products.Finals.questions.questionIdx": q.questionIdx },
                { $set: { "products.Finals.questions.$": q } }
            )

            // update the users progress with learnign points (lets try it out!!)
            for(const section of q.sections) {
                for(const learningPointIdx of section.learningPointIdxs) {
                    await collections.users.updateOne(
                        { email, "products.Finals.learningPoints.learningPointIdx": learningPointIdx },
                        { 
                            $inc: { 
                                "products.Finals.learningPoints.$.totalAttempts": 1, 
                                "products.Finals.learningPoints.$.correctAttempts": section.selectedOption === section.correctOption ? 1 : 0 
                            } 
                        }
                    )
                }
            }

        }

        const user = await collections.users.findOne({ email }) as unknown as User; 
        const previousSessions = [req.body.questions].concat(user.products.Finals.previousSessions).filter((_, i) => i < 5);

        await collections.users.updateOne(
            { "email": email },
            { $set: { "products.Finals.previousSessions": previousSessions } }
        )
    }

    catch (error) { console.log(error); }

});


router.route('/previoussessions').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        const user = await collections.users.findOne({ email }) as unknown as User;
        res.json(user.products.Finals.previousSessions);
    }

    catch (error) { console.log(error); }

});

router.route('/purchased').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        const user = await collections.users.findOne({ email }) as unknown as User;
        res.json( Object.entries(user.products).reduce((acc, [k, v]) => acc.concat([v.name]), []) );
    }

    catch (error) { console.log(error); }
});

//---------------------------------------------------------------------------------------------

const emptyUser = JSON.parse(fs.readFileSync(__dirname + '/../json/emptyUser.json', 'utf8'));

// REMOVES FINALS QUESTIONS AND LAST SESSIONS FROM ALL USERS
// router.route("/REMOVE_OLD").get( async (req, res) => {
//     try {
//         await collections.users.updateMany(
//             { },
//             { "$set": { "products.Finals.questions": [] } }
//         )

//         await collections.users.updateMany(
//             { },
//             { "$set": { "lastSession": [] } }
//         )

//         res.json("complete");
//     }

//     catch (error) { console.log(error); }
// })

export default router;

//---------------------------------------------------------------------------------------------

