"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const role_1 = require("./role");
exports.User = connection_1.default.define("user", {
    Uid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Uname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Ulastname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    Uemail: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    Upassword: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    Ucredential: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    RoleId: { type: sequelize_1.DataTypes.INTEGER, references: { model: role_1.Role, key: 'Rid' }, allowNull: false },
    Uimagen: { type: sequelize_1.DataTypes.STRING, allowNull: true }, // Nuevo campo para la imagen
    Ustatus: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    UcreatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Ucreated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    UupdatedAt: { type: sequelize_1.DataTypes.DATE, field: 'Uupdated', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    UdeletedAt: { type: sequelize_1.DataTypes.DATE, field: 'Udeleted', defaultValue: sequelize_1.DataTypes.NOW, allowNull: false }
}, {
    timestamps: false,
    paranoid: false
});
role_1.Role.hasMany(exports.User, { foreignKey: 'RoleId', as: 'users' });
exports.User.belongsTo(role_1.Role, { foreignKey: 'RoleId', as: 'roles' });
