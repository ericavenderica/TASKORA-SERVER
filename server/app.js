// Gets access to environment variables/settings
require("dotenv").config();

// Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");

const app = express();

// Middlewares configuration
require("./config")(app);

// Routes
app.get("/api", (req, res, next) => {
  res.json("All good in here");
});

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/projects", require("./routes/tasks.routes"));
app.use("/api/categories", require("./routes/categories.routes"));

// Error handling middleware
require("./error-handling")(app);

module.exports = app;
