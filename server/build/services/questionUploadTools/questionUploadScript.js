"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBinaryToString = exports.convertLinksToBlobs = void 0;
var mongodb_1 = require("mongodb");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var convertLinksToBlobs = function (stn) {
    return __assign(__assign({}, stn), { questions: stn.questions.map(function (q) { return (__assign(__assign({}, q), { questionAudio: new mongodb_1.Binary(fs_1.default.readFileSync(path_1.default.join(__dirname, q.questionAudio))), exemplarAudio: new mongodb_1.Binary(fs_1.default.readFileSync(path_1.default.join(__dirname, q.exemplarAudio))), img: new mongodb_1.Binary(fs_1.default.readFileSync(path_1.default.join(__dirname, q.img))) })); }) });
};
exports.convertLinksToBlobs = convertLinksToBlobs;
var convertBinaryToString = function (stn) {
    return __assign(__assign({}, stn), { questions: stn.questions.map(function (q) { return (__assign(__assign({}, q), { questionAudio: new Uint8Array(q.questionAudio.read(0, q.questionAudio.length())), exemplarAudio: new Uint8Array(q.exemplarAudio.read(0, q.exemplarAudio.length())), img: new Uint8Array(q.img.read(0, q.img.length())) })); }) });
};
exports.convertBinaryToString = convertBinaryToString;
