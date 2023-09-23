// Server with express
require("dotenv").config();
import express from "express";
import path from "path";
import http from 'http';

// Rutas
import { routerTest } from './app/routes/test.route';
import { routerProyectos } from "./app/routes/proyectos.route";

const app = express();

const port = process.env.PORT || 80;

const index_direction = process.env.INDEX_DIRECTION;
const index_path = path.join(__dirname, index_direction ?? "");

app.use(express.static(index_path));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", routerTest);
app.use("/proyectos", routerProyectos);

const server = http.createServer(app);

server.listen(port, () =>
    console.log(`App running on: http://localhost:${port}`)
);
