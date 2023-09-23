import { Dialect, Sequelize } from "sequelize"
require("dotenv").config();

class db {
    constructor() { }
    async connection() {
        const port = +(process.env.DB_port ?? "0");
        const dialect = process.env.DB_dialect as Dialect;
        const sequelize = new Sequelize({
            database: process.env.DB_database,
            username: process.env.DB_username,
            password: process.env.DB_password,
            host: process.env.DB_host,
            port,
            dialect,
            dialectOptions: {
                ssl: {
                    require: true, // This will help you. But you will see nwe error
                    rejectUnauthorized: false, // This line will fix new error
                },
            },
        });
        await sequelize.authenticate();
        return sequelize;
    }
}

export { db }
