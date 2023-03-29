const express = require('express');
const port = 5050;



const app = express();
// app.use(errorHandler);
app.use(express.json())
app.use(express.urlencoded({ extended: false }))








app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

