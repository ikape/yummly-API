const express = require("express");
const router = express.Router();
const axios = require("axios");

const { getList } = require("../controller/yummlyController");
const { autoComplete } = require("../controller/yummlyController");
const { getSearch } = require("../controller/yummlyController");
const { getSimilarities } = require("../controller/yummlyController");

// Get all Feeds
router.get("/list", getList);

// Auto-complete feeds
router.get("/auto-complete", autoComplete);

// Search feeds
router.get("/search/", getSearch);

// List - similarities feeds
router.get("/list-similarities", getSimilarities);

module.exports = router;
