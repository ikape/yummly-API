const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getTags } = require("../controller/yummlyController");

//Tags- List
router.get("/list", getTags);

module.exports = router;
