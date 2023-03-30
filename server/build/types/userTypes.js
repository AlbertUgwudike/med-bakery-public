"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewUser = void 0;
var mongodb_1 = require("mongodb");
var generateNewUser = function (email) { return ({
    _id: new mongodb_1.ObjectId(),
    email: email,
    answeredOsceStations: [],
    purchased_osce: false,
    billing_address: {},
}); };
exports.generateNewUser = generateNewUser;
