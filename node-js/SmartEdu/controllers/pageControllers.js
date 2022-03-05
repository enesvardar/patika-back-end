const User = require('../models/User');

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

  const user = await User.findOne({_id:req.session.userID})

  res.render('dashboard', {
    page_name: 'dashboard',
    user,
  });
};

exports.getContactPage = (req, res) => {
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

