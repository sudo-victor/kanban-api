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
exports.BoardService = void 0;
class BoardService {
    constructor(repository) {
        this.repository = repository;
    }
    create(board) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.repository.create(board);
            }
            catch (error) {
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.repository.getById(id);
                return result !== null && result !== void 0 ? result : { error: true, message: "Board not found", status: 404 };
            }
            catch (error) {
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
}
exports.BoardService = BoardService;
