import express from "express";
import path from "path";
require("dotenv").config();
const router = express.Router();

router.route("/osce/:filename").get((req, res) => {
    //console.log("media reqested", req.params.filename);
    res.sendFile(req.params.filename, { root: path.join(__dirname, "../content/OSCE/media") });
});

router.route("/interp/:filename").get((req, res) => {
    console.log("media reqested", req.params.filename);
    res.sendFile(req.params.filename, { root: path.join(__dirname, "../content/DataInterpretation/media") });
});


export default router;
