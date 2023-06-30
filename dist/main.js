"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const config_1 = require("./database/config");
const routes_1 = require("./routes");
(0, config_1.initializeClient)();
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "uploads")));
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(3333, () => console.log('Server listening on port 3333'));
