const express = require("express");
const router = express.Router();
const axios = require("axios");

const { getList } = require("../controller/yummlyController");
const { autoComplete } = require("../controller/yummlyController");
const { getSearch } = require("../controller/yummlyController");
const { getSimilarities } = require("../controller/yummlyController");

// Get all Feeds
router.get("/", getList);

// Auto-complete feeds
router.get("/feeds/auto-complete", autoComplete);

// Search feeds
router.get("/feeds/search/", getSearch);

// List - similarities feeds
router.get("/feeds/list-similarities", getSimilarities);

module.exports = router;
