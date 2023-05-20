const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnectionFunc = async () => {
  await mongoose
    .connect(process.env.Mongo_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
};

module.exports = dbConnectionFunc;
