// Server with express
require("dotenv").config();
const express = require("express");
const path = require("path");
const http = require('http');

const app = express();

const port = process.env.PORT || 80;

const index_direction = process.env.INDEX_DIRECTION;
const index_path = path.join(__dirname, index_direction);

app.use(express.static(index_path));

app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`App running on: http://localhost:${port}`)
);
