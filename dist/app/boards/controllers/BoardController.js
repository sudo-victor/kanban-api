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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const createBoardSchema_1 = require("../schemas/createBoardSchema");
const getBoardByIdSchema_1 = require("../schemas/getBoardByIdSchema");
class BoardController {
    constructor(service) {
        this.service = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                yield (0, createBoardSchema_1.makeCreateBoardSchema)().validate(body);
            }
            catch (err) {
                return res.status(400).json({ errors: err.errors });
            }
            const result = yield this.service.create(body);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(201).json(result);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            try {
                yield (0, getBoardByIdSchema_1.makeGetBoardByIdSchema)().validate(params);
            }
            catch (err) {
                return res.status(400).json({ errors: err.errors });
            }
            const result = yield this.service.getById(params.id);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(201).json(result);
        });
    }
}
exports.BoardController = BoardController;
