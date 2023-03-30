import { AnsweredStationDetails, Station } from "../types";

export const NullStation: Station = {
    id: "NullStation",
    title: "Null Station",
    category: "",
    isDemoStation: true,

    timePermitted: 1000,
    timeRemaining: 1000,

    brief: {
        timePermitted: 60,
        timeRemaining: 60,
        prompt: "",
    },

    questions: [],
};

export const NullStationDetails: AnsweredStationDetails = {
    id: "NullStation",
    markCode: 0,
    responseAudios: [],
    dateAnswered: new Date(0),
};
