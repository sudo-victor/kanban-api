"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BoardSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    tasks: [{ type: mongoose_1.default.SchemaTypes.ObjectId, ref: 'Task' }]
}, { timestamps: true });
const Board = mongoose_1.default.model('Board', BoardSchema);
exports.Board = Board;
