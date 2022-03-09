const User = require('../models/User');
const Category = require('../models/Category');
const Course = require('../models/Course');
const nodemailer = require('nodemailer')

exports.getIndexPage = (req, res) => {
  console.log(req.session.userID)

  res.render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  
  res.render('about', {
    page_name: 'about',
  });
};

exports.getDashboardPage = async (req, res) => {

  const categories = await Category.find({});
  const user = await User.findOne({_id:req.session.userID})
  const courses =  user.role == "teacher" ? await Course.find({user:user}) : await Course.find({_id:user.courses})

  console.log(req.session.userID)
  console.log(courses)

  res.render('dashboard', {
     page_name: 'dashboard',
     user:user,
     categories:categories,
     courses:courses
   });
};

exports.getContactPage = (req, res) => {
  res.render('contact', {
    page_name: 'contact',
  });
};

exports.sendEmail = (req, res) => {
  res.render('contact', {
    page_name: 'contact',
  });
};


exports.getRegisterPage = (req, res) => {
  res.render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.render('login', {
    page_name: 'login',
  });
};

