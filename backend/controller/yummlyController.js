// Feed auto-Complete
const autoComplete = (req, res) => {
  res.status(200).json({message: 'Get auto complete'})
}

// Feed Search
const getSearch = (req, res) => {
  res.status(200).json({message: 'Get feed search'})
}

// Feed List
const getList = (req, res) => {
  res.status(200).json({message: `Get feed list`})
}

// Feed List Similarities
const getSimilarities = (req, res) => {
  res.status(200).json({message: `Get Similarities`})
}

// Feed Tags List
const getTags = (req, res) => {
  res.status(200).json({message: `Get Tag list`})
}

// Feed Categories List
const getCategories = (req, res) => {
  res.status(200).json({message: `Get categories List`})
}

// Feed Review List
const getReviews = (req, res) => {
  res.status(200).json({message: `Get Reviewa List`})
}


module.exports = {
  autoComplete,
  getSearch ,
  getList,
  getSimilarities,
  getTags,
  getCategories,
  getReviews
  
}