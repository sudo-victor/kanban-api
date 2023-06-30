"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const UserModule_1 = require("../users/UserModule");
const AuthController_1 = require("./controllers/AuthController");
const AuthService_1 = require("./services/AuthService");
class AuthModule {
    static build() {
        const service = new AuthService_1.AuthService(UserModule_1.UserModule.build().repository);
        const controller = new AuthController_1.AuthController(service);
        return {
            service,
            controller
        };
    }
}
exports.AuthModule = AuthModule;
