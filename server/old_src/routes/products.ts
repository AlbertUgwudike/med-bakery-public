import express from 'express';
import { FinalsProduct, Product } from '../models/products.model';
import { collections } from '../services/database.service';
require('dotenv').config();

const router = express.Router();

router.route('/availableproducts').get( async (req, res) => {
    try { res.json(await collections.products.find({}) as unknown as Product[]); }
    catch (error) { console.log(error); }
});

router.route('/finals/textbook').post( async (req, res) => {
    const token = req?.body?.token;

    try { 
        const finalsProduct = await collections.products.findOne({ name: "Finals" }) as unknown as FinalsProduct;
        res.json(finalsProduct.textBook); 
    }
    
    catch (error) { console.log(error); }
});

//----------------------------------------------------------------------------------------------------

// just for modifying finals bundle using browser engine, BE CAREFUL WILL OVERWRITE
// router.route('/ADD_FINALS_QUESTIONS').get((req, res) => {
//     const questionsWithIDs = finalsQuestions.map(fq => { return { ...fq, _id: mongodb.ObjectId() } })
//     Products.create(products.map(product => product.name === "Finals" ? { ...product, questions: questionsWithIDs } : product ))
//     .then(() => res.json('Prodcuts Added'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// set ECG topics
// router.route('/SET_ECG_TOPICS').get((req, res) => {
//     User.updateMany({}, { "$set": { "products.ECGs.topics": ecgTopics } })
//         .catch(console.log);

//     res.json("ECG topics set for all users");
// });

// router.route('/REPLACE_FINALS_QUESTIONS').get((req, res) => {
//     const questionsWithIDs = finalsQuestions.map(fq => { return { ...fq, _id: mongodb.ObjectId() } })
//     Products.updateOne({ name: "Finals" }, { "$set": { "questions": questionsWithIDs } })
//         .catch(console.log);

//     res.json("Replaced master final questions");
// });

const insertLineBreaks = (text: string) => {
    return ["A -", "A –", "B -", "B –", "C -", "C –", "D -", "D –", "E -", "E –"].reduce(
        (output, pattern) => output.replace(pattern, "\n" + pattern), 
        text.replace(/\n/g, "")
    );
}


export default router;


