"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeClient = void 0;
const mongoose_1 = require("mongoose");
function initializeClient() {
    mongoose_1.connection
        .on("error", function (err) {
        console.log("Connection error: ", err);
    })
        .once("open", function () {
        console.log("Database connected");
    });
    (0, mongoose_1.connect)(process.env.DATABASE_URL);
}
exports.initializeClient = initializeClient;
