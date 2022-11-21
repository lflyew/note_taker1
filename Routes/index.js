const express = require('express');
const routesapi = require("./routesapi.js");

const router = require("express").Router();

router.use('/notes', routesapi);

module.exports = router;
