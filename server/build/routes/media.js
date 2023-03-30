"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require("dotenv").config();
var router = express_1.default.Router();
router.route("/osce/:filename").get(function (req, res) {
    //console.log("media reqested", req.params.filename);
    res.sendFile(req.params.filename, { root: path_1.default.join(__dirname, "../content/OSCE/media") });
});
router.route("/interp/:filename").get(function (req, res) {
    console.log("media reqested", req.params.filename);
    res.sendFile(req.params.filename, { root: path_1.default.join(__dirname, "../content/DataInterpretation/media") });
});
exports.default = router;
