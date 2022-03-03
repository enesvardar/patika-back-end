const Courese = require('../models/Course');

exports.getAllCourses = async (req, res) => {
  const courses = await Courese.find();

  console.log(courses);

  res.status(201).render('courses', {
    courses: courses,
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

exports.getCourse = async (req, res) => {

  try {
    const course = await Courese.findById(req.params.id);

    res.status(200).render('course', {
      course: course ,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }

};
