"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoModule = void 0;
const Photo_1 = require("./entities/Photo");
const PhotoRepository_1 = require("./repositories/PhotoRepository");
class PhotoModule {
    static build() {
        const repository = new PhotoRepository_1.PhotoRepository(Photo_1.Photo);
        return { repository };
    }
}
exports.PhotoModule = PhotoModule;
