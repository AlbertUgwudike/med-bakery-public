"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mimeTypes = exports.__googleclientid__ = exports.__stripe_key__ = exports.__stripe_secret__ = exports.__uri__ = exports.__prod__ = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/../../.env" });
exports.__prod__ = process.env.NODE_ENV.includes("production");
exports.__uri__ = exports.__prod__ ? process.env.LIVE_URI : process.env.DEV_URI;
exports.__stripe_secret__ = exports.__prod__
    ? process.env.LIVE_STRIPE_SECRET
    : "whsec_fe135729f04bad29c10ef23d6de8801c4ed2e35149932ab37e5e4eddeadcd3a2";
exports.__stripe_key__ = exports.__prod__
    ? process.env.LIVE_STRIPE_KEY
    : "sk_test_51LLmzfJrNC1GMMrMBUSdtnb9Q5CSGp2CZ8AKgsU8mkwu5Hizfx8zjNOK8CwUXnAC3VPNyVwuUxEWgp6AQ9xWq8VU00GzQaFNor";
exports.__googleclientid__ = "439563851182-mo2cj9djg7f0u19ctnjp1864tdaredkc.apps.googleusercontent.com";
exports.mimeTypes = {
    jpeg: "image/jpeg",
    mp3: "audio/mpeg",
    png: "image/png",
};
