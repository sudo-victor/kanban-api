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
exports.TaskController = void 0;
const createTaskSchema_1 = require("../schemas/createTaskSchema");
const updateTaskStatusSchema_1 = require("../schemas/updateTaskStatusSchema");
const deleteTaskSchema_1 = require("../schemas/deleteTaskSchema");
const associateATaskSchema_1 = require("../schemas/associateATaskSchema");
class TaskController {
    constructor(service) {
        this.service = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { board_id } } = req;
            try {
                yield (0, createTaskSchema_1.makeCreateTaskSchema)().validate(body);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.create(Object.assign(Object.assign({}, body), { boardId: board_id }));
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(201).json(result);
        });
    }
    updateStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, params: { id } } = req;
            const payload = { status: body.status, id };
            try {
                yield (0, updateTaskStatusSchema_1.makeUpdateTaskStatusSchema)().validate(payload);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.updateStatus(payload);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(200).json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            try {
                yield (0, deleteTaskSchema_1.makeDeleteTaskSchema)().validate(params);
            }
            catch (error) {
                return res.status(400).json({ errors: error.errors });
            }
            const result = yield this.service.delete(params.id);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(200).json(result);
        });
    }
    associateAUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { params } = req;
            try {
                yield (0, associateATaskSchema_1.makeAssociateATaksSchema)().validate(params);
            }
            catch (err) {
                return res.status(400).json({ errors: err.errors });
            }
            const result = yield this.service.associateAUser(params);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(200).json(result);
        });
    }
}
exports.TaskController = TaskController;
