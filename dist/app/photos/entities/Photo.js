"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PhotoSchema = new mongoose_1.default.Schema({
    filename: { type: String, required: true },
    mimetype: { type: String, required: true },
}, { timestamps: true });
const Photo = mongoose_1.default.model('Photo', PhotoSchema);
exports.Photo = Photo;
