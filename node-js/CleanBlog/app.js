const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');

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

app.get('/', async (req, res) => {
  const post = await Post.find({});

  res.render('index', {
    post,
  });
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

app.post('/newpost', async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(3000, () => {
  console.log('Sunucu %d portunda başlatıldı...', port);
});
