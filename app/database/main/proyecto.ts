import { DataTypes } from "sequelize"
import { db } from './../main';
class Proyecto extends db {
    constructor() {
        super();
    }

    async define() {
        const connection = await super.connection();

        const proyectoModel = connection.define(
            "proyecto",
            {
                // Model attributes are defined here
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                nombre: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                schema: "main",
                freezeTableName: true,
                createdAt: false,
                updatedAt: false,
            }
        );
        return proyectoModel;
    }

    async getAll() {
        const proyectoModel = await this.define();
        return await proyectoModel.findAll();
    }
}

export { Proyecto };
