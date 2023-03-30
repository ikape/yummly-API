const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5050;
const axios = require("axios");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

// feeds list
app.use("/api/feeds", require("./backend/Routes/feedsRoutes"));
// feed search
app.use("/api/feeds/search", require("./backend/Routes/feedsRoutes"));
// feed auto-complete
app.use("/api/feeds/auto-complete", require("./backend/Routes/feedsRoutes"));
// feed-similarities
app.use(
  "/api/feeds/list-similarities",
  require("./backend/Routes/feedsRoutes")
);
// tags list
app.use("/api/tags/list", require("./backend/Routes/feedsRoutes"));
// categories-list
app.use("/api/categories/list", require("./backend/Routes/feedsRoutes"));
// reviews-list
app.use("/api/reviews/list", require("./backend/Routes/feedsRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
