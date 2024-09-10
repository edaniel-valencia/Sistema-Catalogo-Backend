import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import { Role } from "./role";

export const User = sequelize.define("user", {
    Uid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Uname: { type: DataTypes.STRING, allowNull: false },
    Ulastname: { type: DataTypes.STRING, allowNull: false },
    Uemail: { type: DataTypes.STRING, unique: true, allowNull: false },
    Upassword: { type: DataTypes.STRING, unique: true, allowNull: false },
    Ucredential: { type: DataTypes.STRING, unique: true, allowNull: false },
    RoleId:   { type: DataTypes.INTEGER, references: {  model: Role, key: 'Rid' },  allowNull: false },
    Uimagen: { type: DataTypes.STRING, allowNull: true },  // Nuevo campo para la imagen
    Ustatus: { type: DataTypes.INTEGER, allowNull: false },
    UcreatedAt:   { type: DataTypes.DATE, field: 'Ucreated', defaultValue: DataTypes.NOW, allowNull: false },
    UupdatedAt:   { type: DataTypes.DATE, field: 'Uupdated', defaultValue: DataTypes.NOW, allowNull: false },
    UdeletedAt:   { type: DataTypes.DATE, field: 'Udeleted', defaultValue: DataTypes.NOW, allowNull: false }
  }, {
    timestamps: false, 
    paranoid: false 
  });
  Role.hasMany(User, { foreignKey: 'RoleId', as: 'users' });
User.belongsTo(Role, { foreignKey: 'RoleId', as: 'roles' });

