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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_service_1 = require("../services/database.service");
var functions_1 = require("../functions");
var localcontent_service_1 = require("../services/localcontent.service");
require("dotenv").config();
var router = express_1.default.Router();
router.route("/update_stations").post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!req.body.token)
                    return [2 /*return*/, res.json({ success: false })];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, functions_1.getEmailFromToken)(req.body.token)];
            case 2:
                email = (_a.sent());
                if (email === "")
                    throw "-- email extraction failed --";
                console.log(email, "attempted to insert", req.body.markCode);
                return [4 /*yield*/, database_service_1.collections.users.findOne({ email: email })];
            case 3:
                user = _a.sent();
                if (user.answeredOsceStations.map(function (s) { return s.id; }).includes(req.body.id)) {
                    database_service_1.collections.users.updateOne({ email: email }, {
                        $set: {
                            "answeredOsceStations.$[station].markCode": req.body.markCode,
                            "answeredOsceStations.$[station].responseAudios": req.body.responseAudios,
                            "answeredOsceStations.$[station].dateAnswered": new Date(),
                        },
                    }, {
                        arrayFilters: [
                            {
                                "station.id": req.body.id,
                            },
                        ],
                    });
                }
                else {
                    database_service_1.collections.users.updateOne({ email: email }, {
                        $push: {
                            answeredOsceStations: {
                                id: req.body.id,
                                markCode: req.body.markCode,
                                responseAudios: req.body.responseAudios,
                                dateAnswered: new Date(),
                            },
                        },
                    });
                }
                res.json({ success: true });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                console.error(error_1);
                res.json({ success: false });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
var stationToSummary = function (s) { return ({
    title: s.title,
    thumbnail: s.thumbnail,
    isDemoStation: s.isDemoStation,
    id: s.id,
    category: s.category,
}); };
router.route("/get_stations").post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json({
            summaries: localcontent_service_1.content.stations.map(stationToSummary),
            success: true,
        });
        return [2 /*return*/];
    });
}); });
router.route("/get_station").post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var stations;
    return __generator(this, function (_a) {
        stations = localcontent_service_1.content.stations.filter(function (s) { return s.id === req.body.id; });
        res.json({
            success: stations.length > 0,
            station: stations.length > 0 ? stations[0] : undefined,
        });
        return [2 /*return*/];
    });
}); });
var countCategories = function (stations) {
    return stations.reduce(function (acc, stn) {
        if (acc.map(function (c) { return c.category; }).includes(stn.category)) {
            return acc.map(function (c) { return (c.category === stn.category ? __assign(__assign({}, c), { count: c.count + 1 }) : c); });
        }
        return acc.concat([{ category: stn.category, count: 1 }]);
    }, []);
};
router.route("/category_count").get(function (_, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json({
            success: true,
            categoryCount: countCategories(localcontent_service_1.content.stations),
        });
        return [2 /*return*/];
    });
}); });
exports.default = router;
