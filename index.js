const consign = require('consign');
const express = require('express');
const app = express();
const port = 3000;

consign()
  .include("db.js")
  .then("models")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app);
