export type MasterCategory = {
    categoryTitle: string,
    totalQuestionCount: number,
    answeredQuestionsCount: number,
    correctlyAnsweredCount: number,
    subcategories: MasterCategory[],
    selected: boolean
}

export type Section = {
    correctOption: number;
    explanations: string[];
    learningPointIdxs: number[];
    options: string[];
    percentages: number[];
    question: string;
    selectedOption: number;
    stem: string;
}

export type FinalsQuestion = {
    _id: string;
    answered: boolean;
    categoryPath: string[];
    chat: { email: string, message: string }[];
    notes: string;
    questionIdx: number;
    sections: Section[];
    timeLastAttempted: number;
    timeLastUpdated: number;
    type: "demo" | "active" | "hidden";
}

export type Product = {
    name: string;
    description: string;
    path: string;
    imgsrc: string;
}

export type TextBookTopicSection = {
    sectionTitle: string;
    content: string;
}

export type TextBookTopic = {
    _id: any;
    topicTitle: string;
    learningPointIdx: number[];
    topicIdx: number;
    categoryPath: string[];
    sections: TextBookTopicSection[]
}

// the null answered question as a signal to the server
export const NOMORE: FinalsQuestion = {
    sections: [{
        stem: "No More Questions",
        question: "",
        explanations: [],
        options: [],
        correctOption: 1,
        selectedOption: -1,
        percentages: [0, 0, 0, 0, 0],
        learningPointIdxs: [0]
    }],
    categoryPath: [],
    _id: "",
    answered: false,
    questionIdx: -1,
    chat: [],
    notes: "",
    timeLastAttempted: 0,
    timeLastUpdated: 0,
    type: "active"
}