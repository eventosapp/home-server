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
const { Sequelize } = require("sequelize");
class db {
    constructor() { }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            const sequelize = new Sequelize({
                database: "eventosapp",
                username: "postgres",
                password: "eventosapp",
                host: "database-eventosapp.cgm72eza25xd.us-east-1.rds.amazonaws.com",
                port: 5432,
                dialect: "postgres",
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
