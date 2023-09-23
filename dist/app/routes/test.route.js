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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerTest = void 0;
const express_1 = __importDefault(require("express"));
const main_1 = require("../database/main");
const routerTest = express_1.default.Router();
exports.routerTest = routerTest;
routerTest.get('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield testDB();
        res.send({ success: true });
    }
    catch (_a) {
        res.status(500).send({ message: "Error al intentar conectar en la base de datos" });
    }
}));
function testDB() {
    const database = new main_1.db();
    return database.connection();
}
