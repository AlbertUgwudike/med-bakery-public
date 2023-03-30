import { ObjectId } from "mongodb";

export type AnsweredStationDetails = {
    id: string; // id of the relevant master-station
    markCode: number; // the binary representation of this number indicates markshceme selection
    dateAnswered: Date;
    responseAudios: string[];
};

export type User = {
    _id: ObjectId;
    email: string;
    answeredOsceStations: AnsweredStationDetails[];
    purchased_osce: boolean;
    billing_address: any;
};

export const generateNewUser = (email: string): User => ({
    _id: new ObjectId(),
    email,
    answeredOsceStations: [],
    purchased_osce: false,
    billing_address: {},
});
