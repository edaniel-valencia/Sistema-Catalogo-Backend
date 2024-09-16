import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Banner = sequelize.define("banner", {
  Bid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Bimage: { type: DataTypes.STRING, allowNull: true },  // Nuevo campo para la imagen
  Bdescription: { type: DataTypes.STRING, allowNull: false },
  Bstatus: { type: DataTypes.INTEGER, allowNull: false },
  BcreatedAt: { type: DataTypes.DATE, field: 'Bcreated', defaultValue: DataTypes.NOW, allowNull: false }, 
  BupdatedAt: { type: DataTypes.DATE, field: 'Bupdated', defaultValue: DataTypes.NOW, allowNull: false }, 
  BdeletedAt: { type: DataTypes.DATE, field: 'Bdeleted', defaultValue: DataTypes.NOW, allowNull: false }, 
}, {
  timestamps: false, 
  paranoid: false 
})

