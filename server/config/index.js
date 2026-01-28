const express = require("express");
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Controls a very specific set of CORS options
  app.use(
    cors({
      origin: ["http://localhost:5173"] // Frontend URL
    })
  );
};
