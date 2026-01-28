const express = require("express");
const cors = require("cors");

// Middleware configuration
module.exports = (app) => {

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(
  cors({
    origin: [process.env.ORIGIN || "http://localhost:5173"] 
  })
)};