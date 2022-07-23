"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CartSchema = new mongoose_1.default.Schema({
    quantity: Number,
    _id: mongoose_1.default.Schema.Types.ObjectId,
    userid: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    image: String,
    price: String,
});
exports.Cart = mongoose_1.default.model("cartItem", CartSchema);
