const express = require("express");
const server = express();
const fs = require("fs");
const path = require("path");

server.get("/", (req, res) => {
  res.send(`File Created By Name - ${Date.now()}`);
  fs.writeFileSync(
    path.join(__dirname, `${Date.now().toString()}.txt`),
    `${Date.now()}`
  );
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
