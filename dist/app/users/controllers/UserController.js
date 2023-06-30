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
exports.UserController = void 0;
const createUserSchema_1 = require("../schemas/createUserSchema");
class UserController {
    constructor(service) {
        this.service = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body, file } = req;
            try {
                yield (0, createUserSchema_1.makeCreateUserSchema)().validate(body);
            }
            catch (err) {
                return res.status(400).json({ errors: err.errors });
            }
            const payload = Object.assign(Object.assign({}, body), { photo: {
                    filename: file === null || file === void 0 ? void 0 : file.filename,
                    mimetype: file === null || file === void 0 ? void 0 : file.mimetype,
                } });
            const result = yield this.service.create(payload);
            if ('error' in result) {
                return res.status(result.status).json(result);
            }
            return res.status(201).json(result);
        });
    }
}
exports.UserController = UserController;
