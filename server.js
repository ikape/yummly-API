const express = require('express');
const cors = require('cors')
const bodyParser = require ('body-parser')
const port = 5050;
const axios = require("axios");
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
require('dotenv').config()





app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

