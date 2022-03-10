const User = require('../models/User');
const { body, validationResult } = require('express-validator');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect('/login');
  } catch (error) {
    const errors = validationResult(req);
    console.log(errors);
    for (let i = 0; i < errors.array().length; i++) {
      req.flash('error', `${errors.array()[i].msg}`);
    }
    res.status(400).redirect('/register');
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if(user){
    if (user.password == password) {
      req.session.userID = user._id;
  
      res.redirect('/');
    } else {
      req.flash('error', "Your password is not correct!");
      res.status(400).redirect('/login');
    }
  }
  else{
    req.flash('error', "Users is not excits");
    res.status(400).redirect('/login');
  }

};

exports.logoutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};
