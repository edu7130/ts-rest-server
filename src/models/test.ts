import { DataTypes } from "sequelize/types";
import { db } from "../db/connection";

export const Test = db.define('Test', {
    id: {
        type: DataTypes.CHAR(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'test',
    freezeTableName: true,
    paranoid: true
});