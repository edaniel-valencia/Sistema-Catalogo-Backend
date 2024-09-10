import { DataTypes } from "sequelize";
import sequelize from "../database/connection";
import { Role } from "./role";

export const Client = sequelize.define("client", {
  Cid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Cname: { type: DataTypes.STRING, allowNull: false },
  Clastname: { type: DataTypes.STRING, allowNull: false },
  Cemail: { type: DataTypes.STRING, unique: true, allowNull: false },
  Cpassword: { type: DataTypes.STRING, unique: true, allowNull: false },
  Ccredential: { type: DataTypes.STRING, unique: true, allowNull: false },
  RoleId: { type: DataTypes.INTEGER, references: { model: Role, key: 'Rid' }, allowNull: false },
  Cimagen: { type: DataTypes.STRING, allowNull: true },  // Nuevo campo para la imagen
  Cstatus: { type: DataTypes.INTEGER, allowNull: false },
  CcreatedAt: { type: DataTypes.DATE, field: 'Ccreated', defaultValue: DataTypes.NOW, allowNull: false },
  CupdatedAt: { type: DataTypes.DATE, field: 'Cupdated', defaultValue: DataTypes.NOW, allowNull: false },
  CdeletedAt: { type: DataTypes.DATE, field: 'Cdeleted', defaultValue: DataTypes.NOW, allowNull: false }
}, {
  timestamps: false,
  paranoid: false
});
Role.hasMany(Client, { foreignKey: 'RoleId', as: 'clients' });
Client.belongsTo(Role, { foreignKey: 'RoleId', as: 'roles' });

