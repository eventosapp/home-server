"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv").config();
class db {
    constructor() { }
    connection() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const port = +((_a = process.env.DB_port) !== null && _a !== void 0 ? _a : "0");
            const dialect = process.env.DB_dialect;
            const sequelize = new sequelize_1.Sequelize({
                database: process.env.DB_database,
                username: process.env.DB_username,
                password: process.env.DB_password,
                host: process.env.DB_host,
                port,
                dialect,
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false, // This line will fix new error
                    },
                },
            });
            yield sequelize.authenticate();
            return sequelize;
        });
    }
}
exports.db = db;
