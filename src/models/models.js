import { sequalize } from "../../db.js";
import { DataTypes } from "sequelize";

export const Task = sequalize.define('task', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    due_date: { type: DataTypes.DATE, allowNull: false },
    completed_at: { type: DataTypes.DATE },
  },
  {
    paranoid: true,
    deletedAt: 'deleted_at',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
