const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Body-parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
