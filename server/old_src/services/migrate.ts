import { RequestHandler } from "express";
import { ObjectId } from "mongodb";
import { User } from "../models/user.model";
import { collections } from "./database.service";
import { getEmailFromToken, createLearningPointList } from "./functions";

// const migrate: RequestHandler = async (req, res, next) => {

//     const token = req?.body?.token;

//     try {
//         const email  = await getEmailFromToken(token) as string;
//         const user = await collections.users.findOne({ email }) as unknown; // Hopefully a user

//         const migratedUser: User = {
//             _id: typeof user._id === typeof ObjectId ? 
//         }

//         res.json( createLearningPointList(user.products.Finals.learningPoints.slice(1)) ) 
//     }

//     catch (error) { console.log(error); }

// }