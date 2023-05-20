const route = require("express").Router();

// register api
route.post("/register", (req, res) => {
  res.status(201).end();
});

// login api
route.post("/login", (req, res) => {
  res.status(200).end();
});

module.exports = route;
