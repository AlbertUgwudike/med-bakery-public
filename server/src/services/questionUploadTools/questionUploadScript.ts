import { Binary } from "mongodb";
import { OsceStation } from "../../types/osceStationTypes";
import fs from "fs";
import path from "path";

export const convertLinksToBlobs = (stn: OsceStation<string>): OsceStation<Binary> => {
    return {
        ...stn,
        questions: stn.questions.map(q => ({
            ...q,
            questionAudio: new Binary(fs.readFileSync(path.join(__dirname, q.questionAudio))),
            exemplarAudio: new Binary(fs.readFileSync(path.join(__dirname, q.exemplarAudio))),
            img: new Binary(fs.readFileSync(path.join(__dirname, q.img))),
        })),
    };
};

export const convertBinaryToString = (stn: OsceStation<Binary>): OsceStation<Uint8Array> => {
    return {
        ...stn,
        questions: stn.questions.map(q => ({
            ...q,
            questionAudio: new Uint8Array(q.questionAudio.read(0, q.questionAudio.length())),
            exemplarAudio: new Uint8Array(q.exemplarAudio.read(0, q.exemplarAudio.length())),
            img: new Uint8Array(q.img.read(0, q.img.length())),
        })),
    };
};
