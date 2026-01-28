const mongoose = require("mongoose");

// MONGO_URI is defined in the .env file
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskora";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
