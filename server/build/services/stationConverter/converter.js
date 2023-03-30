"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var s_1 = __importDefault(require("./s"));
fs_1.default.writeFileSync(s_1.default.id + ".json", JSON.stringify(s_1.default));
