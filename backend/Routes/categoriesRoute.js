const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getCategories } = require("../controller/yummlyController");

//Tags- List
router.get("/list", getCategories);

module.exports = router;
