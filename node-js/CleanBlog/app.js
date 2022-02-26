const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

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

app.get('/', postController.getAllPost);
app.post('/newpost', postController.addPost);
app.post('/updatepost/:id', postController.updatePost);
app.get('/post/del/:id', postController.delPost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post/:id', pageController.getPostPage);
app.get('/post/edit/:id', pageController.getEditPage);

const port = 3000;
app.listen(3000, () => {
  console.log('Sunucu %d portunda baslatildi...', port);
});
