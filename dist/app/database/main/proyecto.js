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
exports.Proyecto = void 0;
const sequelize_1 = require("sequelize");
const main_1 = require("./../main");
class Proyecto extends main_1.db {
    constructor() {
        super();
    }
    define() {
        const _super = Object.create(null, {
            connection: { get: () => super.connection }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield _super.connection.call(this);
            const proyectoModel = connection.define("proyecto", {
                // Model attributes are defined here
                id: {
                    type: sequelize_1.DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                nombre: {
                    type: sequelize_1.DataTypes.STRING,
                    allowNull: false,
                },
            }, {
                schema: "main",
                freezeTableName: true,
                createdAt: false,
                updatedAt: false,
            });
            return proyectoModel;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const proyectoModel = yield this.define();
            return yield proyectoModel.findAll();
        });
    }
}
exports.Proyecto = Proyecto;
