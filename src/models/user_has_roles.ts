import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database/connection";
import { User } from "./user";
import { Role } from "./role";

export const UserHasRoles = sequelize.define(
  "user_has_roles",
  {
    Uid: { type: DataTypes.INTEGER, primaryKey: true, references: { 
        model: User, // Hace referencia a la tabla User
        key: "Uid", // Columna a la que hace referencia
      },
      onDelete: "CASCADE", // Opcional: borra en cascada si se elimina un usuario
      onUpdate: "CASCADE", // Actualiza en cascada si se cambia el ID del usuario
    },
    Rid: { type: DataTypes.INTEGER, primaryKey: true, references: {
        model: Role, // Hace referencia a la tabla Role
        key: "Rid", // Columna a la que hace referencia
      },
      onDelete: "CASCADE", // Opcional: borra en cascada si se elimina un rol
      onUpdate: "CASCADE", // Actualiza en cascada si se cambia el ID del rol
    },
    URstatus: { type: DataTypes.INTEGER, allowNull: false },
    URcreatedAt: { type: DataTypes.DATE, field: "URcreated", defaultValue: DataTypes.NOW, allowNull: false, },
    URupdatedAt: { type: DataTypes.DATE, field: "URupdated", defaultValue: DataTypes.NOW, allowNull: false, },
    URdeletedAt: { type: DataTypes.DATE, field: "URdeleted", defaultValue: DataTypes.NOW, allowNull: false, },
  },
  {
    timestamps: false,
    paranoid: false,
  }
);
// Asociación entre User y UserHasRoles
User.hasMany(UserHasRoles, { foreignKey: 'Uid' });
UserHasRoles.belongsTo(User, { foreignKey: 'Uid' });

// Asociación entre Role y UserHasRoles
Role.hasMany(UserHasRoles, { foreignKey: 'Rid' });
UserHasRoles.belongsTo(Role, { foreignKey: 'Rid' });

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
