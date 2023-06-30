"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardRepository = void 0;
class BoardRepository {
    constructor(model) {
        this.model = model;
    }
    create(board) {
        return this.model.create(board);
    }
    pushTask(boardId, taskId) {
        return this.model.findByIdAndUpdate(boardId, {
            $push: {
                tasks: [taskId]
            }
        }, { new: true }).populate('tasks');
    }
    getById(id) {
        return this.model.findById(id).populate('tasks');
    }
}
exports.BoardRepository = BoardRepository;
