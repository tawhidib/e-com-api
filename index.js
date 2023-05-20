const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello world");
  res.end();
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
