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
exports.TaskService = void 0;
class TaskService {
    constructor(repository, boardRepository) {
        this.repository = repository;
        this.boardRepository = boardRepository;
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskCreated = yield this.repository.create(task);
                return this.boardRepository.pushTask(task.boardId, taskCreated.id);
            }
            catch (error) {
                console.log('error creating board', error);
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    updateStatus(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.repository.updateStatus(task);
            }
            catch (error) {
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.repository.delete(id);
            }
            catch (error) {
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
    associateAUser(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.repository.pushUser(params.task_id, params.user_id);
                return result !== null && result !== void 0 ? result : { error: true, message: "Task not found", status: 404 };
            }
            catch (error) {
                return { error: true, message: "Internal server error", status: 500 };
            }
        });
    }
}
exports.TaskService = TaskService;
