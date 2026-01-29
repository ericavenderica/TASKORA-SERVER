const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  // In development, we use morgan to log requests
  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
    cors({
      origin: [process.env.ORIGIN, "http://localhost:5173"]
    })
  );
};