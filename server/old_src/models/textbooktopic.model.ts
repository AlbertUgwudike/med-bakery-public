import { ObjectId } from "mongodb";

export type TextBookTopicSection = {
    sectionTitle: string;
    content: string;
}

export type TextBookTopic = {
    _id: ObjectId;
    topicTitle: string;
    learningPointIdx: number[];
    topicIdx: number;
    categoryPath: string[];
    sections: TextBookTopicSection[]
}