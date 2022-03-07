const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).redirect('/login');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
}

exports.loginUser = async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email })

  console.log(user);

  if(user.password == password){

    req.session.userID = user._id;

    res.redirect('/');
  }
  else{
    res.status(401).send('FAIL');
  }

}

exports.logoutUser = async (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}