import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../../.env" });

export const __prod__ =  process.env.NODE_ENV.includes("production");
export const __uri__ = __prod__ ? process.env.LIVE_URI : process.env.DEV_URI;
export const __stripe_secret__ = __prod__ 
    ? process.env.LIVE_STRIPE_SECRET 
    : "whsec_fe135729f04bad29c10ef23d6de8801c4ed2e35149932ab37e5e4eddeadcd3a2"

export const __stripe_key__ = __prod__ 
    ? process.env.LIVE_STRIPE_KEY
    : "sk_test_51LLmzfJrNC1GMMrMBUSdtnb9Q5CSGp2CZ8AKgsU8mkwu5Hizfx8zjNOK8CwUXnAC3VPNyVwuUxEWgp6AQ9xWq8VU00GzQaFNor"

export const __googleclientid__ =
    "439563851182-mo2cj9djg7f0u19ctnjp1864tdaredkc.apps.googleusercontent.com";

export const mimeTypes: { [key: string]: string } = {
    jpeg: "image/jpeg",
    mp3: "audio/mpeg",
    png: "image/png",
};
