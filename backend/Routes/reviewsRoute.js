const express = require("express");
const router = express.Router();
const axios = require("axios");
const { getReviews } = require("../controller/yummlyController");

//reviews- List
router.get("/tags/list", getReviews);

module.exports = router;
