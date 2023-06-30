"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const BoardModule_1 = require("../app/boards/BoardModule");
const TaskModule_1 = require("../app/tasks/TaskModule");
const UserModule_1 = require("../app/users/UserModule");
const storageConfig_1 = require("../configs/storageConfig");
const AuthModule_1 = require("../app/auth/AuthModule");
const EnsureAuthenticate_1 = require("../common/middlewares/EnsureAuthenticate");
const router = (0, express_1.Router)();
exports.router = router;
const boardController = BoardModule_1.BoardModule.build().controller;
const taskController = TaskModule_1.TaskModule.build().controller;
const userController = UserModule_1.UserModule.build().controller;
const authController = AuthModule_1.AuthModule.build().controller;
// ROTAS PUBLICAS
router.post('/users', storageConfig_1.upload.single('photo'), userController.create.bind(userController));
router.post('/auth', authController.login.bind(authController));
// ROTAS PRIVADAS
router.use(EnsureAuthenticate_1.EnsureAuthenticate.execute);
router.post('/boards', boardController.create.bind(boardController));
router.get('/boards/:id', boardController.getById.bind(boardController));
router.post('/boards/:board_id/tasks', taskController.create.bind(taskController));
router.patch('/boards/:board_id/tasks/:id', taskController.updateStatus.bind(taskController));
router.patch('/boards/:board_id/tasks/:task_id/users/:user_id', taskController.associateAUser.bind(taskController));
router.delete('/boards/:board_id/tasks/:id', taskController.delete.bind(taskController));
