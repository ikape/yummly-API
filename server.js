const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const port = 5050;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Yummly API",
      version: "0.1.9",
      description: "Testing of the Yummmly API from Rapid API"
    },
    servers: [
      {
        url: "http://localhost:5050/api/"
      }
    ]
  },
  apis: ["./Backend/Routes/*.js"]
};
const specs = swaggerJsDoc(options);

const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
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
