"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_controller_1 = __importDefault(require("../controllers/category.controller"));
var CategoryRoutes = /** @class */ (function () {
    function CategoryRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    CategoryRoutes.prototype.config = function () {
        this.router.get('/', category_controller_1.default.getAll);
        this.router.get('/:id', category_controller_1.default.getOne);
        this.router.post('/', category_controller_1.default.create);
        this.router.put('/:id', category_controller_1.default.update);
        this.router.delete('/:id', category_controller_1.default.delete);
    };
    return CategoryRoutes;
}());
exports.default = new CategoryRoutes().router;
