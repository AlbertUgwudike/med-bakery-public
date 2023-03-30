import { OsceStation } from "../types/osceStationTypes";
import fs from "fs";
import path from "path";
import { DataInterpQuestion } from "../types/dataInterpretationTypes";

type Content = {
    stations: OsceStation<string>[];
    dataInterpQuestions: DataInterpQuestion[];
};

export const content: Content = {
    stations: [],
    dataInterpQuestions: []
};

export const loadContent = () => {
    // load osce stations
    let fileNames = fs.readdirSync(path.join(__dirname, "../content/OSCE/stations"));
    fileNames.forEach(fileName => {
        const station = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../content/OSCE/stations", fileName), "utf-8")
        );
        content.stations.push(station);
    });

    // load data interpretation
    fileNames = fs.readdirSync(path.join(__dirname, "../content/DataInterpretation/questions"));
    fileNames.forEach(fileName => {
        const question = JSON.parse(
            fs.readFileSync(path.join(__dirname, "../content/DataInterpretation/questions", fileName), "utf-8")
        );
        content.dataInterpQuestions.push(question);
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
