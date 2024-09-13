"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importStar(require("express"));
const category_1 = __importDefault(require("../routes/category"));
const product_1 = __importDefault(require("../routes/product"));
const role_1 = __importDefault(require("../routes/role"));
const user_1 = __importDefault(require("../routes/user"));
const auth_1 = __importDefault(require("../routes/auth"));
const email_1 = __importDefault(require("../routes/email"));
const category_2 = require("./category");
const product_2 = require("./product");
const role_2 = require("./role");
const user_2 = require("./user");
const cors_1 = __importDefault(require("cors"));
// import multer from 'multer'
// import sharp from 'sharp'  
const client_1 = require("./client");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.router();
        this.DBconnetc();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("La aplicación se esta corriendo exitosamente en el puerto => " + this.port);
        });
    }
    router() {
        this.app.use(category_1.default);
        this.app.use(product_1.default);
        this.app.use(role_1.default);
        this.app.use(user_1.default);
        this.app.use(auth_1.default);
        this.app.use(email_1.default);
    }
    midlewares() {
        //Parseo BOdy
        this.app.use(express_1.default.json());
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use((0, express_1.json)());
        //
        this.app.use((0, cors_1.default)());
    }
    DBconnetc() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield category_2.Category.sync();
                yield product_2.Product.sync();
                yield user_2.User.sync();
                yield client_1.Client.sync();
                yield role_2.Role.sync();
                // await UserHasRoles.sync(); 
                // await Product.sync({force: true}); 
                // await Category.sync({alter: true}); 
                // await Category.destroy({where: {}});
                // await Category.destroy({where:{}}); 
                // await Category.sync({ force: true });
                // await Product.destroy({where:{}}); 
                console.log("Conexion de DB exitoso");
            }
            catch (error) {
                console.log("Conexion de DB errorena => " + error);
            }
        });
    }
}
exports.default = Server;
