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
exports.TaskRepository = void 0;
class TaskRepository {
    constructor(model) {
        this.model = model;
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(task);
        });
    }
    updateStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(params.id, {
                $set: { status: params.status }
            }, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndDelete(id);
        });
    }
    pushUser(taskId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(taskId, {
                $push: { users: [userId] }
            }, { new: true }).populate('users');
        });
    }
}
exports.TaskRepository = TaskRepository;
