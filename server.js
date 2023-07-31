// Server with express
const express = require("express");
const path = require('path');

const app = express();
const port = process.env.PORT || 801;
const index_direction = process.env.INDEX_DIRECTION;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, index_direction));
});

app.listen(port);
console.log(`Server on port ${port} with express`);
