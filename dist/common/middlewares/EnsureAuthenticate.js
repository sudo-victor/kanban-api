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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsureAuthenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class EnsureAuthenticate {
    static execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization = null } = req.headers;
            if (!authorization) {
                return res.status(401).json({ error: 'Token not found' });
            }
            const [, token] = authorization.split(" ");
            try {
                jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
            }
            catch (err) {
                return res.status(401).json({ error: 'Invalid token' });
            }
            const data = jsonwebtoken_1.default.decode(token);
            // req.user = { id: data.id }
            next();
        });
    }
}
exports.EnsureAuthenticate = EnsureAuthenticate;
