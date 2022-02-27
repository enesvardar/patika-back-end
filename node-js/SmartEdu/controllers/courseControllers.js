const Courese = require('../models/Course');

exports.createCourese = async (req, res) => {
  const course = await Courese.create(req.body);

  res.status(201).json({
    status: 'success',
    course,
  });
};
