import express from "express";
import { content } from "../services/localcontent.service";
const router = express.Router();

router.route("/get_questions").post(async (req, res) => {
    res.json({
        success: true,
        questions: content.dataInterpQuestions,
    });
});

export default router;