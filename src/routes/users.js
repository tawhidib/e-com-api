const route = require("express").Router();

route.get("/", async (req, res) => {
  res.status(200).send("this api for all users");
});

module.exports = route;
