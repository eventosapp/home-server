// Server with express
require('dotenv').config();
const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 80;
const index_direction = process.env.INDEX_DIRECTION;

app.get("/", function (req, res) {
  const index_path = path.join(__dirname, index_direction);
  res.sendFile(index_path);
});

app.listen(port);
console.log(`Server on port ${port} with express`);
