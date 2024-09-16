"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Banner = connection_1.default.define("banner", {
    Bid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Bimage: { type: sequelize_1.DataTypes.STRING, allowNull: true }, // Nuevo campo para la imagen
    Bdescription: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Bstatus: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    BcreatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Bcreated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    BupdatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Bupdated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    BdeletedAt: { type: sequelize_1.DataTypes.DATE, field: 'Bdeleted', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
}, {
    timestamps: false,
    paranoid: false
});
