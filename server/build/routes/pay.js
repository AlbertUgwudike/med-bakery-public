"use strict";
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
var stripe_1 = __importDefault(require("stripe"));
var constants_1 = require("../constants");
var database_service_1 = require("../services/database.service");
var router = express_1.default.Router();
require("dotenv").config();
var stripe = new stripe_1.default(constants_1.__stripe_key__, { apiVersion: "2020-08-27" });
router.route("/create-checkout-session").post(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, success_url, cancel_url, product, price, session, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, success_url = _a.success_url, cancel_url = _a.cancel_url;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, stripe.products.create({ name: "OSCE Subscription - One Year" })];
            case 2:
                product = _b.sent();
                return [4 /*yield*/, stripe.prices.create({
                        product: product.id,
                        // unit_amount: 4500,
                        unit_amount: 1,
                        currency: "gbp",
                    })];
            case 3:
                price = _b.sent();
                return [4 /*yield*/, stripe.checkout.sessions.create({
                        line_items: [
                            {
                                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                                price: price.id,
                                quantity: 1,
                            },
                        ],
                        mode: "payment",
                        billing_address_collection: "required",
                        success_url: success_url,
                        cancel_url: cancel_url,
                    })];
            case 4:
                session = _b.sent();
                res.json(session.url).status(200);
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
var fulfillOrder = function (session) {
    var _a = session.customer_details, email = _a.email, address = _a.address;
    database_service_1.collections.users.updateOne({ email: email }, { $set: { purchased_osce: true, billing_address: address } });
    console.log("Fulfilling order", session);
};
router.route("/webhook").post(function (request, response) {
    var payload = request.body;
    console.log(payload);
    var sig = request.headers["stripe-signature"];
    var event;
    try {
        event = stripe.webhooks.constructEvent(payload, sig, constants_1.__stripe_secret__);
    }
    catch (err) {
        console.log("==================> event initialisatio error", err);
        return response.status(400).send("Webhook Error: ".concat(err.message));
    }
    if (event.type === "checkout.session.completed") {
        var session = event.data.object;
        // Fulfill the purchase...
        fulfillOrder(session);
    }
    response.status(200).end();
});
exports.default = router;
