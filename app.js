const express = require("express");
const app = express();
const authRoute = require("./src/routes/auth");
const usersRoute = require("./src/routes/users");
const port = 5000;

// database connection
const dbConnect = require("./db-connection");
dbConnect();

// middleware
app.use(express.json());

// routes
const GlobalPrefix = "/api/v1";
app.use(GlobalPrefix + "/auth", authRoute);
app.use(GlobalPrefix + "/users", usersRoute);

app.get("/test", (req, res) => {
  res.send("This is test api");
  res.end();
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
