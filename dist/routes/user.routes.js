"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UserRoutes.prototype.config = function () {
        this.router.get('/', user_controller_1.default.getAll);
        this.router.get('/:id', user_controller_1.default.getOne);
        this.router.post('/', user_controller_1.default.create);
        this.router.put('/:id', user_controller_1.default.update);
        this.router.delete('/:id', user_controller_1.default.delete);
    };
    return UserRoutes;
}());
exports.default = new UserRoutes().router;
