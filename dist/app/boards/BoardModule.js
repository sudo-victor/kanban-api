"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModule = void 0;
const Board_1 = require("./entities/Board");
const BoardRepository_1 = require("./repositories/BoardRepository");
const BoardService_1 = require("./services/BoardService");
const BoardController_1 = require("./controllers/BoardController");
class BoardModule {
    static build() {
        const repository = new BoardRepository_1.BoardRepository(Board_1.Board);
        const service = new BoardService_1.BoardService(repository);
        const controller = new BoardController_1.BoardController(service);
        return { repository, service, controller };
    }
}
exports.BoardModule = BoardModule;
