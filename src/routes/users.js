const route = require("express").Router();

// create an user
route.post("/", async (req, res) => {
  res.status(201).send("this api will create a new user");
});

// find all users
route.get("/", async (req, res) => {
  res.status(200).send("this api for all users");
});

// find an user
route.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  res.status(200).send(`this will return user info of #${userId}`);
});

// update an user
route.patch("/:userId", async (req, res) => {
  const { userId } = req.params;
  res.status(200).send(`this will update user info of #${userId}`);
});

// delete an user
route.delete("/:userId", async (req, res) => {
  const { userId } = req.params;
  res.status(200).send(`this will delete user info of #${userId}`);
});

module.exports = route;
