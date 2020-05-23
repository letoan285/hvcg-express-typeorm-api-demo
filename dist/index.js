"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var helmet_1 = __importDefault(require("helmet"));
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var product_routes_1 = __importDefault(require("./routes/product.routes"));
var category_routes_1 = __importDefault(require("./routes/category.routes"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
        typeorm_1.createConnection();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 8000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(helmet_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    };
    Server.prototype.routes = function () {
        this.app.use('/api/products', product_routes_1.default);
        this.app.use('/api/users', user_routes_1.default);
        this.app.use('/api/categories', category_routes_1.default);
    };
    Server.prototype.start = function () {
        this.app.listen(this.app.get('port'));
        console.log("Server run on port", this.app.get('port'));
    };
    return Server;
}());
exports.Server = Server;
var server = new Server();
server.start();
