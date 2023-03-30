import express from 'express';
import { User } from '../models/user.model';
import { FinalsProduct, Product } from '../models/products.model';
import { createMasterCategory, categoryWithTitle, getEmailFromToken, createLearningPointList } from "../services/functions"
import { collections } from '../services/database.service';
import { ObjectId } from 'mongodb';
import { parseFinalsCsv } from '../services/questioncsvfunctions';
require('dotenv').config();

const router = express.Router();

router.route('/learningpoints').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email  = await getEmailFromToken(token) as string;
        const user = await collections.users.findOne({ email }) as unknown as User;
        res.json( createLearningPointList(user.products.Finals.learningPoints.slice(1)) ) 
    }

    catch (error) { console.log(error); }
}); 

router.route('/finals/categorylist').post( async (req, res) => {
    const token = req?.body?.token;

    try {
        // console.log("beginning.........")
        // let start = Date.now()

        const email  = await getEmailFromToken(token) as string;

        // console.log("retrieved email in ", Date.now() - start, "ms")
        // start = Date.now()

        const user = await collections.users.findOne({ email }) as unknown as User;

        // console.log("retrieved user in ", Date.now() - start, "ms")
        // start = Date.now()

        res.json(user.products.Finals.questions.slice(1).reduce(  // the .slice() gets rid of the example question
            (acc, a) => createMasterCategory(acc, a, 0), 
            categoryWithTitle("All")
        ));

        // console.log("created category in ", Date.now() - start, "ms")
        // start = Date.now()
    }

    catch (error) { console.log(error); }
}); 

router.route('/newquestion').post( async (req, res) => {
    const token = req?.body?.token;
    const paths: string[][] = req.body?.paths?.map((p: string[]) => p.slice(1));

    try {
        const email  = await getEmailFromToken(token) as string;
        const aggregation = [
            {
                "$match" : { email }
            },
            {
                "$project" : {
                    "products.Finals.questions": {
                        "$filter": {
                            "input": "$products.Finals.questions",
                            "as": "q",
                            "cond": { "$and": [
                                { "$in" : [ "$$q.categoryPath", paths ] },
                                { "$eq" : ["$$q.type", "active"] }
                            ]}
                        },
                    }
                }
            }
        ]

        // we expect there to be one user in this array
        const users = await collections.users.aggregate(aggregation).toArray() as User[];

        const availableQuestions = users[0].products.Finals.questions.filter(q => req.body.repeatQuestions || !q.answered).map(question => {
            question.answered = false;
            question.sections = question.sections.map(section => { return { ...section, selectedOption: -1 } });
            return question;
        });
        
        res.json(availableQuestions);
    }

    catch (error) { console.log(error); }
});

// the post request shoud contain the questionID
router.route("/getchat").post( async (req, res) => {
    try {
        const product = await collections.products.findOne({ name: "Finals" }) as unknown as FinalsProduct;
        res.json(product.questions.filter(q => q.questionIdx === req.body.questionIdx)[0].chat);
    }

    catch (error) { console.log(error); }
})

// the post request should contain userID and questionID
router.route("/updatechat").post( async (req, res) => {
    try {
        await collections.products.updateOne(
            { "name": "Finals", "questions.questionIdx": req.body.questionIdx },
            { $set: { "questions.$.chat": req.body.chat } }
        );
    }

    catch (error) { console.log(error); }
})

// the post request shoud contain the userID and questionID
router.route("/getnotes").post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        const user  = await collections.users.findOne({ email }) as unknown as User;
        res.json(user.products.Finals.questions.filter(q => q.questionIdx === req.body.questionIdx)[0].notes);
    }

    catch (error) { console.log(error); }
})

// the post request shoud contain the userID and questionID
router.route("/updatenotes").post( async (req, res) => {
    const token = req?.body?.token;

    try {
        const email = await getEmailFromToken(token);
        await collections.users.updateOne(
            { "email": email, "products.Finals.questions.questionIdx": req.body.questionIdx },
            { $set: { "products.Finals.questions.$.notes": req.body.notes } }
        );
    }

    catch (error) { console.log(error); }
})

//----------------------------------------------------------------------------------------------------



// const exampleQuestions = JSON.parse(fs.readFileSync(__dirname + '/../json/question.json', 'utf8'));

// add finals bundle to my dev account
// router.route('/DEVELOPMENT_ADD_QUESTION').get((req, res) => {
//     Question.create(exampleQuestions)
//     .then(() => res.json('Questions Added'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// remove all user's questions
// router.route('/REMOVE_ALL_FINALS_QUESTIONS').get((req, res) => {
//     User.updateMany({}, { "$set": { "products.Finals.questions": [] } }).catch(console.log);
//     res.json("Finals Questions Removed :-)")
// })

// router.route('/UPLOAD_UPLOADED_QUESTIONS').get((req, res) => {
//     const questions = JSON.parse(fs.readFileSync(__dirname + '/../json/explanations.json', 'utf8'));
//     for (question of questions) {
//         Product.updateOne({ name: "Finals" }, { "$push": { "questions": question } }).catch(console.log)
//     }
//     res.json("done boi");
// });

// retrieve an example question
// router.route('/GET_EXAMPLE').get( async (req, res) => {
//     try {
//         const finalsProduct = await collections.products.findOne({ "name": "Finals" }) as unknown as FinalsProduct;
//         fs.writeFileSync(__dirname + "../questionData/output.json", JSON.stringify(finalsProduct.questions[5], null, 4));
//     }

//     catch (error) { console.log(error); }
// })




export default router;