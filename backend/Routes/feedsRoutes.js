const express = require('express');
const router = express.Router();
const axios = require("axios");

const { autoComplete} = require('../controller/yummlyController')
const { getSearch} = require('../controller/yummlyController')
const { getList} = require('../controller/yummlyController')
const { getSimilarities} = require('../controller/yummlyController')
const { getTags} = require('../controller/yummlyController')
const { getCategories} = require('../controller/yummlyController')
const { getReviews} = require('../controller/yummlyController')



router.get('/feeds', (req, res) => {
const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list',
  params: {limit: '24', start: '0'},
  headers: {
    'X-RapidAPI-Key': '6b986dc8f7msh6a4bfdf9c925ddbp19b140jsnd0687ed9cdd3',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})


// ------------------------------------------------------------------------------------------
router.get('/feeds/search', (req, res) => {
const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/search',
  params: {
    start: '0',
    maxResult: '18',
    maxTotalTimeInSeconds: '7200',
    q: 'chicken soup',
    allowedAttribute: 'diet-lacto-vegetarian,diet-low-fodmap',
    FAT_KCALMax: '1000'
  },
  headers: {
    'X-RapidAPI-Key': '6b986dc8f7msh6a4bfdf9c925ddbp19b140jsnd0687ed9cdd3',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})

// -----------------------------------------------------------------------------------
router.get('/feeds/auto-complete', (req, res) => {
  const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
  params: {q: 'chicken soup'},
  headers: {
    'X-RapidAPI-Key': '6b986dc8f7msh6a4bfdf9c925ddbp19b140jsnd0687ed9cdd3',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})

// ---------------------------------------------------------------------------------------

router.get('/feeds/list-similarities', (req, res) => {
  const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list-similarities',
  params: {
    limit: '18',
    start: '0',
    id: '15-Minute-Baked-Salmon-with-Lemon-9029477',
    apiFeedType: 'moreFrom',
    authorId: 'Yummly'
  },
  headers: {
    'X-RapidAPI-Key': '6b986dc8f7msh6a4bfdf9c925ddbp19b140jsnd0687ed9cdd3',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})











module.exports = router;