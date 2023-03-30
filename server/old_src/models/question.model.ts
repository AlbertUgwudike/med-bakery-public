import { ObjectId } from "mongodb"


// need to keep track of app-modifable fields so they are copied over during question updates

export type Section = {
    stem: string;
    question: string;
    options: string[];
    correctOption: number;
    selectedOption: number;                         // user-modifable
    percentages: number[];                          // app-modifable
    explanations: string[];
    learningPointIdxs: number[];
}


export type FinalsQuestion = {
    _id: ObjectId;
    answered: boolean;                              // user-modifable
    categoryPath: string[];
    chat: { email: string, message: string }[];     // app-modifable
    notes: string;                                  // user-modifable
    questionIdx: number;
    sections: Section[];
    timeLastAttempted: number;                      // user-modifable
    timeLastUpdated: number;
    type: "demo" | "active" | "hidden";
}
