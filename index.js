"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Server with express
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const app = (0, express_1.default)();
const port = process.env.PORT || 80;
const index_direction = process.env.INDEX_DIRECTION;
const index_path = path_1.default.join(__dirname, index_direction !== null && index_direction !== void 0 ? index_direction : "");
app.use(express_1.default.static(index_path));
app.get("/*", (req, res) => res.sendFile(path_1.default.join(__dirname)));
const server = http_1.default.createServer(app);
server.listen(port, () => console.log(`App running on: http://localhost:${port}`));
