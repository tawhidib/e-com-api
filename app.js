const express = require("express");
const app = express();
const usersRoute = require("./src/routes/users");
const port = 5000;

// database connection
const db = require("./db-connection");
db.dbConnectionFunc();

// middleware
app.use(express.json());

// routes
app.use("/api/users", usersRoute);

app.get("/test", (req, res) => {
  res.send("This is test api");
  res.end();
});

app.listen(port, () => {
  console.log("app is running on port ", port);
});
