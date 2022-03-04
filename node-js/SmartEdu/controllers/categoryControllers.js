const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  
  const category = await Category.create(req.body);

  res.status(201).json({
    status: 'success',
    category,
  });
};

