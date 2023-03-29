// Feed auto-Complete
const getFeedautoComplete = (req, res) => {
  res.status(200).json({message: 'Get auto complete'})
}

// Feed Search
const getFeedsSearch = (req, res) => {
  res.status(200).json({message: 'Get feed search'})
}

// Feed List
const getFeedsList = (req, res) => {
  res.status(200).json({message: `Get feed list`})
}

// Feed List Similarities
const getListSimilarities = (req, res) => {
  res.status(200).json({message: `Get Similarities`})
}

// Feed Tags List
const getTagsList = (req, res) => {
  res.status(200).json({message: `Get Tag list`})
}

// Feed Categories List
const getCategoriesList = (req, res) => {
  res.status(200).json({message: `Get categories List`})
}

// Feed Review List
const getReviewsList = (req, res) => {
  res.status(200).json({message: `Get Reviewa List`})
}


module.exports = {
  getFeedautoComplete,
  getFeedsSearch ,
  getFeedsList,
  getListSimilarities,
  getTagsList,
  getCategoriesList,
  getReviewsList
  
}