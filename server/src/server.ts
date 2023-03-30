import express = require("express");
import cors = require("cors");
import path = require("path");
import userRouter from "./routes/user";
import osceRouter from "./routes/osce";
import mediaRouter from "./routes/media";
import payRouter from "./routes/pay";
import interpRouter from "./routes/interp"
import { connectToDatabase } from "./services/database.service";
import { __googleclientid__, __uri__ } from "./constants";
import { loadContent } from "./services/localcontent.service";
import bodyParser from "body-parser";

connectToDatabase(__uri__)
    .then(() => {
        const port = process.env.PORT || 3001;
        const app = express(); 

        loadContent();

        app.use(cors());
        app.use((req, res, next) => {
            if (req.originalUrl === "/pay/webhook") {
                bodyParser.raw({ type: "application/json", limit: "50mb" })(req, res, next);
            } else {
                bodyParser.json({ limit: "50mb" })(req, res, next);
            }
        });

        app.use("/media", mediaRouter);

        app.use('/datainterpretation/media', express.static(path.join(__dirname, 'datainterpretation', 'media')));


        // for deployment: ensure paths point to html file in build folder -------

        app.use(express.static(__dirname + "/../../client/build"));
        app.get("/*", function (req, res) {
            res.sendFile(path.resolve(__dirname + "/../../client/build/index.html"));
        });

        // -----------------------------------------------------------------------

        app.use("/user", userRouter);
        app.use("/osce", osceRouter);
        app.use("/pay", payRouter);
        app.use("/interp", interpRouter);

        app.listen(port, () => {
            console.log("Server is go at port " + port + "!");
        });
    })

    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
