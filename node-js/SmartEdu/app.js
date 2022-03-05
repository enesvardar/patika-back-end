const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/authRoute');
const session = require('express-session');
const app = express();

//Connect DB
mongoose
  .connect('mongodb://127.0.0.1/smartedu-db')
  .then(() => {
    console.log('DB Connected Successfully');
  });

// Template Engine
app.set('view engine', 'ejs');


// Middlewares
app.use(
  session({
    secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
    resave: false,
    saveUninitialized: true,
  })
);

global.userIN = null;
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', pageRoute);
app.use('/courses', courseRoute);
app.use('/categories', categoryRoute);
app.use('/users', userRoute);


const port = 3000;

app.listen(port, () => {
  console.log('App started on port %d', port);
});
