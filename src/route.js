const express = require("express");

const controller = require("./controller");

const router = express.Router();

router
    .get("/hello", controller.user_location)

module.exports = router;