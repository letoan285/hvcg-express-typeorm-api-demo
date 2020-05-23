"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product.controller"));
var ProductRoutes = /** @class */ (function () {
    function ProductRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    ProductRoutes.prototype.config = function () {
        this.router.get('/', product_controller_1.default.getAll);
        this.router.get('/:id', product_controller_1.default.getOne);
        this.router.post('/', product_controller_1.default.create);
        this.router.put('/:id', product_controller_1.default.update);
        this.router.delete('/:id', product_controller_1.default.delete);
    };
    return ProductRoutes;
}());
exports.default = new ProductRoutes().router;
