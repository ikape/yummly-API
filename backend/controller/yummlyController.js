const axios = require("axios");

// Feed auto-Complete
const autoComplete = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/auto-complete",
    params: { q: "chicken soup" },
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

// Feed Search
const getSearch = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/search",
    params: {
      start: "0",
      maxResult: "18",
      maxTotalTimeInSeconds: "7200",
      q: "chicken soup",
      allowedAttribute: "diet-lacto-vegetarian,diet-low-fodmap",
      FAT_KCALMax: "1000"
    },
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

// Feed List
const getList = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { limit: "1", start: "1" },
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };
  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
    console.log(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

// Feed List Similarities
const getSimilarities = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list-similarities",
    params: {
      limit: "18",
      start: "0",
      id: "15-Minute-Baked-Salmon-with-Lemon-9029477",
      apiFeedType: "moreFrom",
      authorId: "Yummly"
    },
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

// Tags List
const getTags = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/tags/list",
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

// Categories List
const getCategories = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/categories/list",
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };

  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

// Review List
const getReviews = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/reviews/list",
    params: {
      offset: "0",
      globalId: "a8d6747a-bfaa-46a7-92fb-892e3f76b264",
      limit: "20"
    },
    headers: {
      "X-RapidAPI-Key": process.env.TEST_KEY,
      "X-RapidAPI-Host": "yummly2.p.rapidapi.com"
    }
  };
  try {
    const response = await axios.request(options);
    res.send({ message: "data returned from API", data: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message || "something went wrong" });
  }
};

module.exports = {
  autoComplete,
  getSearch,
  getList,
  getSimilarities,
  getTags,
  getCategories,
  getReviews
};
