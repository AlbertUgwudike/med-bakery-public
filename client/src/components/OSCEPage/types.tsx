export type MarkSchemeSection = {
    title: string;
    points: { point: string; selected: boolean; pointId: number }[];
};

export type Station = {
    id: string;
    category: string;
    isDemoStation: boolean;
    title: string;
    timePermitted: number;
    timeRemaining: number;
    brief: {
        prompt: string;
        timePermitted: number;
        timeRemaining: number;
    };
    questions: Question[];
};

export type Question = {
    question: string;
    questionAudio: string;
    img: string;
    responseAudio: string;
    exemplarAudio: string;
    markScheme: MarkSchemeSection[];
};

export const exemplarId = "exemplar";
export const responseId = "response";
export const promptId = "prompt";
export const startAudioRecordingId = "startAudioRecording";

export type StationSummary = {
    id: string;
    thumbnail: string;
    title: string;
    category: string;
    isDemoStation: boolean;
};

export type AnsweredStationDetails = {
    id: string; // id of the relevant master-station
    markCode: number; // percentage correctenss
    responseAudios: string[]; // Raw audio data of each reponse
    dateAnswered: Date; // date question was answered
};

export const mimeTypes: { [key: string]: string } = {
    jpeg: "image/jpeg",
    mp3: "audio/mpeg",
    png: "image/png",
};

export type HeaderDetails = {
    title: string;
    percentage: number;
    exit: boolean;
    navigator: boolean;
    timer: boolean;
    nextFunc: () => void;
    prevFunc: () => void;
};

export type UserDetailsOsce = {
    answeredStations: AnsweredStationDetails[];
    purchasedOsce: boolean;
};
