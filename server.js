const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5050;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

// ------------------ROUTES---------------------------
// feeds list
app.use("/api/feeds", require("./backend/Routes/feedsRoutes"));

// // tags list
app.use("/api/tags", require("./backend/Routes/tagRoute"));
// // categories-list
app.use("/api/categories", require("./backend/Routes/categoriesRoute"));
// // reviews-list
app.use("/api/reviews", require("./backend/Routes/reviewsRoute"));

// ____________________PORT__________________________

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
