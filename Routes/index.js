const express = require('express');
const routesapi = require("./routesapi.js");

const app = express();

app.use('/notes', routesapi);

module.exports = app;
