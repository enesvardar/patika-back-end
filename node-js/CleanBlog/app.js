const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const pageRoute = require("./routes/pageRoute")
const postRoute = require("./routes/postRoute")

mongoose
  .connect('mongodb://127.0.0.1/cleandb')
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Not Connected to Database ERROR! ', err);
  });

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pageRoute);
app.use('/', postRoute);

const port = 3000;
app.listen(3000, () => {
  console.log('Sunucu %d portunda baslatildi...', port);
});
