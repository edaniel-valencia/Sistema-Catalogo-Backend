"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const role_1 = require("./role");
exports.Client = connection_1.default.define("client", {
    Cid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Cname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Clastname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Cemail: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    Cpassword: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    Ccredential: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    RoleId: { type: sequelize_1.DataTypes.INTEGER, references: { model: role_1.Role, key: 'Rid' }, allowNull: false },
    Cimagen: { type: sequelize_1.DataTypes.STRING, allowNull: true }, // Nuevo campo para la imagen
    Cstatus: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    CcreatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Ccreated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    CupdatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Cupdated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    CdeletedAt: { type: sequelize_1.DataTypes.DATE, field: 'Cdeleted', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false }
}, {
    timestamps: false,
    paranoid: false
});
role_1.Role.hasMany(exports.Client, { foreignKey: 'RoleId', as: 'clients' });
exports.Client.belongsTo(role_1.Role, { foreignKey: 'RoleId', as: 'roles' });
