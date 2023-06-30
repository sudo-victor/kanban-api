"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const BoardModule_1 = require("../boards/BoardModule");
const TaskController_1 = require("./controllers/TaskController");
const Task_1 = require("./entities/Task");
const TaskRepository_1 = require("./repositories/TaskRepository");
const TaskService_1 = require("./services/TaskService");
class TaskModule {
    static build() {
        const repository = new TaskRepository_1.TaskRepository(Task_1.Task);
        const service = new TaskService_1.TaskService(repository, BoardModule_1.BoardModule.build().repository);
        const controller = new TaskController_1.TaskController(service);
        return { repository, service, controller };
    }
}
exports.TaskModule = TaskModule;
