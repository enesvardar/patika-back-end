const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES

const myLogger = (req, res, next) => {
  console.log('Middleware Log 1');
  next();
};

app.use(express.static('public'));
app.use(myLogger);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/add_post', function (req, res) {
  res.render('add_post');
});

app.get('/post', function (req, res) {
    res.render('post');
  });

const port = 3000;

app.listen(3000, () => {
  console.log('Sunucu %d portunda başlatıldı...', port);
});
