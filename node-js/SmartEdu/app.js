const express = require('express');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/home', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/courses', (req, res) => {
  res.render('courses')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

const port = 3000;

app.listen(port, () => {
  console.log('App started on port %d', port);
});
