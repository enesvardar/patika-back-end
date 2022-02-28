const Courese = require('../models/Course');


exports.getAllCourses = async (req, res) => {

  const course = await Courese.find();
  console.log("naber")
  res.status(201).render("courses",{
    course,
    page_name: 'courses',
  });

}; 

exports.createCourse = async (req, res) => {
  const course = await Courese.create(req.body);

  res.status(201).json({
    status: 'success',
    course,
  });
};
