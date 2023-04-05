const express = require("express");
const router = express.Router();
const { getReviews } = require("../controller/yummlyController");

//reviews- List
router.get("/list", getReviews);

module.exports = router;
