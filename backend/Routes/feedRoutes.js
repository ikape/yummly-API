const express = require('express');
const router = express.Router();
const { getFeedautoComplete, getFeedsSearch , getFeedsList, getListSimilarities, getTagsList, getCategoriesList,getReviewsList} = require('../controller/yummlyController')

router.route('/').get(getFeedautoComplete).post(setFeedautoComplete)


module.exports = router;