import * as mongoDB from "mongodb";
import { __prod__ } from "../constants";
import { OsceStation } from "../types/osceStationTypes";
import { User } from "../types/userTypes";

export const collections: {
    users?: mongoDB.Collection<User>;
    osce_stations?: mongoDB.Collection<OsceStation<mongoDB.Binary>>;
} = {};

export async function connectToDatabase(URI: string) {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(URI);

    await client.connect();

    const db: mongoDB.Db = client.db("MedBakery");

    const stationCollection: mongoDB.Collection<OsceStation<mongoDB.Binary>> =
        db.collection("osce_stations");
    const userCollection: mongoDB.Collection<User> = db.collection("users");

    collections.osce_stations = stationCollection;
    collections.users = userCollection;

    console.log(`Successfully connected to database: ${db.databaseName}`);
}
