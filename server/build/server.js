"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var path = require("path");
var user_1 = __importDefault(require("./routes/user"));
var osce_1 = __importDefault(require("./routes/osce"));
var media_1 = __importDefault(require("./routes/media"));
var pay_1 = __importDefault(require("./routes/pay"));
var interp_1 = __importDefault(require("./routes/interp"));
var database_service_1 = require("./services/database.service");
var constants_1 = require("./constants");
var localcontent_service_1 = require("./services/localcontent.service");
var body_parser_1 = __importDefault(require("body-parser"));
(0, database_service_1.connectToDatabase)(constants_1.__uri__)
    .then(function () {
    var port = process.env.PORT || 3001;
    var app = express();
    (0, localcontent_service_1.loadContent)();
    app.use(cors());
    app.use(function (req, res, next) {
        if (req.originalUrl === "/pay/webhook") {
            body_parser_1.default.raw({ type: "application/json", limit: "50mb" })(req, res, next);
        }
        else {
            body_parser_1.default.json({ limit: "50mb" })(req, res, next);
        }
    });
    app.use("/media", media_1.default);
    app.use('/datainterpretation/media', express.static(path.join(__dirname, 'datainterpretation', 'media')));
    // for deployment: ensure paths point to html file in build folder -------
    app.use(express.static(__dirname + "/../../client/build"));
    app.get("/*", function (req, res) {
        res.sendFile(path.resolve(__dirname + "/../../client/build/index.html"));
    });
    // -----------------------------------------------------------------------
    app.use("/user", user_1.default);
    app.use("/osce", osce_1.default);
    app.use("/pay", pay_1.default);
    app.use("/interp", interp_1.default);
    app.listen(port, function () {
        console.log("Server is go at port " + port + "!");
    });
})
    .catch(function (error) {
    console.error("Database connection failed", error);
    process.exit();
});
