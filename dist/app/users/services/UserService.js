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
exports.UserService = void 0;
const bcrypt_1 = require("bcrypt");
class UserService {
    constructor(repository, photoRepository) {
        this.repository = repository;
        this.photoRepository = photoRepository;
    }
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // verificar se usuario ja existe
            const userAlreadyExist = yield this.repository.findByEmail(params.email);
            if (userAlreadyExist) {
                return { error: true, message: 'User already exists', status: 400 };
            }
            // criar foto
            const photo = yield this.photoRepository.create(params.photo);
            // criar user
            const payload = Object.assign(Object.assign({}, params), { password: (0, bcrypt_1.hashSync)(params.password, 8), photo: photo.id });
            const result = yield this.repository.create(payload);
            return Object.assign(Object.assign({}, result._doc), { photo });
        });
    }
}
exports.UserService = UserService;
