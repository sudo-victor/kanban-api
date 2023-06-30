"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const PhotoModule_1 = require("../photos/PhotoModule");
const UserController_1 = require("./controllers/UserController");
const User_1 = require("./entities/User");
const UserRepository_1 = require("./repositories/UserRepository");
const UserService_1 = require("./services/UserService");
class UserModule {
    static build() {
        const repository = new UserRepository_1.UserRepository(User_1.User);
        const service = new UserService_1.UserService(repository, PhotoModule_1.PhotoModule.build().repository);
        const controller = new UserController_1.UserController(service);
        return { repository, service, controller };
    }
}
exports.UserModule = UserModule;
