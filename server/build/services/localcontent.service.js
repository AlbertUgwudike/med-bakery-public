"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadContent = exports.content = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
exports.content = {
    stations: [],
    dataInterpQuestions: []
};
var loadContent = function () {
    // load osce stations
    var fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, "../content/OSCE/stations"));
    fileNames.forEach(function (fileName) {
        var station = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "../content/OSCE/stations", fileName), "utf-8"));
        exports.content.stations.push(station);
    });
    // load data interpretation
    fileNames = fs_1.default.readdirSync(path_1.default.join(__dirname, "../content/DataInterpretation/questions"));
    fileNames.forEach(function (fileName) {
        var question = JSON.parse(fs_1.default.readFileSync(path_1.default.join(__dirname, "../content/DataInterpretation/questions", fileName), "utf-8"));
        exports.content.dataInterpQuestions.push(question);
    });
    // media is now served directly from folder
    // const mediaFileNames = fs.readdirSync(path.join(__dirname, "../content/OSCE/media"));
    // mediaFileNames.forEach(fileName => {
    //     const data = fs.readFileSync(
    //         path.join(__dirname, "../content/OSCE/media", fileName),
    //         "utf-8"
    //     );
    //     content.media.push({
    //         fileName,
    //         data: new Uint8Array(data.split("").map(s => s.charCodeAt(0))),
    //     });
    // });
    console.log("content loaded successfully!");
};
exports.loadContent = loadContent;
