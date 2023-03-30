import { ObjectId } from "mongodb";

// what should be stored about an osce station in mongo ---------------------

// parametrised by media type, blob (mongo), string (before upload)
export type OsceStation<MediaType> = {
    id: ObjectId;
    isDemoStation: boolean;
    category: string;
    thumbnail: string;
    title: string;
    timePermitted: number;
    timeRemaining: number;
    brief: {
        prompt: string;
        timePermitted: number;
        timeRemaining: number;
    };
    questions: Question<MediaType>[];
};

export type Question<MediaType> = {
    question: string;
    questionAudio: MediaType;
    img: MediaType;
    exemplarAudio: MediaType;
    responseAudio: string;
    markScheme: MarkSchemeSection[];
};

export type MarkSchemeSection = {
    title: string;
    points: { point: string; selected: boolean; pointId: number }[];
};
