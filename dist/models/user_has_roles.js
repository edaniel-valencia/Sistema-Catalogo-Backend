"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHasRoles = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const user_1 = require("./user");
const role_1 = require("./role");
exports.UserHasRoles = connection_1.default.define("user_has_roles", {
    Uid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, references: {
            model: user_1.User, // Hace referencia a la tabla User
            key: "Uid", // Columna a la que hace referencia
        },
        onDelete: "CASCADE", // Opcional: borra en cascada si se elimina un usuario
        onUpdate: "CASCADE", // Actualiza en cascada si se cambia el ID del usuario
    },
    Rid: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, references: {
            model: role_1.Role, // Hace referencia a la tabla Role
            key: "Rid", // Columna a la que hace referencia
        },
        onDelete: "CASCADE", // Opcional: borra en cascada si se elimina un rol
        onUpdate: "CASCADE", // Actualiza en cascada si se cambia el ID del rol
    },
    URstatus: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    URcreatedAt: { type: sequelize_1.DataTypes.DATE, field: "URcreated", defaultValue: sequelize_1.DataTypes.NOW, allowNull: false, },
    URupdatedAt: { type: sequelize_1.DataTypes.DATE, field: "URupdated", defaultValue: sequelize_1.DataTypes.NOW, allowNull: false, },
    URdeletedAt: { type: sequelize_1.DataTypes.DATE, field: "URdeleted", defaultValue: sequelize_1.DataTypes.NOW, allowNull: false, },
}, {
    timestamps: false,
    paranoid: false,
});
// Asociación entre User y UserHasRoles
user_1.User.hasMany(exports.UserHasRoles, { foreignKey: 'Uid' });
exports.UserHasRoles.belongsTo(user_1.User, { foreignKey: 'Uid' });
// Asociación entre Role y UserHasRoles
role_1.Role.hasMany(exports.UserHasRoles, { foreignKey: 'Rid' });
exports.UserHasRoles.belongsTo(role_1.Role, { foreignKey: 'Rid' });
// export const UserHasRoles = sequelize.define("user_has_roles",{
//     Uid: { type: DataTypes.INTEGER, primaryKey: true},
//     Rid: { type: DataTypes.INTEGER, primaryKey: true},
//     URstatus: { type: DataTypes.INTEGER, allowNull: false },
//     URcreatedAt:   { type: DataTypes.DATE, field: 'URcreated', defaultValue: DataTypes.NOW, allowNull: false },
//     URupdatedAt:   { type: DataTypes.DATE, field: 'URupdated', defaultValue: DataTypes.NOW, allowNull: false },
//     URdeletedAt:   { type: DataTypes.DATE, field: 'URdeleted', defaultValue: DataTypes.NOW, allowNull: false }
//   }, {
//     timestamps: false,
//     paranoid: false
//   });
//   User.hasMany(User, { foreignKey: 'Uid', as: 'users' });
// Role.belongsTo(Role, { foreignKey: 'Rid', as: 'roles' });
