const mongoose = require("mongoose");

const dbConnectionFunc = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/e-com-db")
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

module.exports = {
  dbConnectionFunc,
};
