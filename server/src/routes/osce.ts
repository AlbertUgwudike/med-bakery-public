import express from "express";
import { collections } from "../services/database.service";
import { getEmailFromToken } from "../functions";
import { content } from "../services/localcontent.service";
import { mimeTypes } from "../constants";
import path from "path";
import { OsceStation } from "../types/osceStationTypes";
require("dotenv").config();
const router = express.Router();

router.route("/update_stations").post(async (req, res) => {
    if (!req.body.token) return res.json({ success: false });

    try {
        const email = (await getEmailFromToken(req.body.token)) as string;
        if (email === "") throw "-- email extraction failed --";
        console.log(email, "attempted to insert", req.body.markCode);
        const user = await collections.users.findOne({ email });

        if (user.answeredOsceStations.map(s => s.id).includes(req.body.id)) {
            collections.users.updateOne(
                { email },
                {
                    $set: {
                        "answeredOsceStations.$[station].markCode": req.body.markCode,
                        "answeredOsceStations.$[station].responseAudios": req.body.responseAudios,
                        "answeredOsceStations.$[station].dateAnswered": new Date(),
                    },
                },
                {
                    arrayFilters: [
                        {
                            "station.id": req.body.id,
                        },
                    ],
                }
            );
        } else {
            collections.users.updateOne(
                { email },
                {
                    $push: {
                        answeredOsceStations: {
                            id: req.body.id,
                            markCode: req.body.markCode,
                            responseAudios: req.body.responseAudios,
                            dateAnswered: new Date(),
                        },
                    },
                }
            );
        }
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.json({ success: false });
    }
});

const stationToSummary = (s: OsceStation<string>) => ({
    title: s.title,
    thumbnail: s.thumbnail,
    isDemoStation: s.isDemoStation,
    id: s.id,
    category: s.category,
});

router.route("/get_stations").post(async (req, res) => {
    res.json({
        summaries: content.stations.map(stationToSummary),
        success: true,
    });
});

router.route("/get_station").post(async (req, res) => {
    const stations = content.stations.filter(s => s.id === req.body.id);
    res.json({
        success: stations.length > 0,
        station: stations.length > 0 ? stations[0] : undefined,
    });
});

const countCategories = (
    stations: OsceStation<string>[]
): { category: string; count: number }[] => {
    return stations.reduce((acc, stn) => {
        if (acc.map(c => c.category).includes(stn.category)) {
            return acc.map(c => (c.category === stn.category ? { ...c, count: c.count + 1 } : c));
        }
        return acc.concat([{ category: stn.category, count: 1 }]);
    }, [] as { category: string; count: number }[]);
};

router.route("/category_count").get(async (_, res) => {
    res.json({
        success: true,
        categoryCount: countCategories(content.stations),
    });
});

export default router;
