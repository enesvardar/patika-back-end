const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');

exports.createCourse = async (req, res) => {

  const course = await Course.create({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    user: req.session.userID,
  });
  res.redirect('/courses');
};

exports.getAllCourses = async (req, res) => {
  const categories = await Category.find({});
  const courses = await Course.find({});

  res.status(201).render('courses', {
    courses: courses,
    categories: categories,
    page_name: 'courses',
  });
};

exports.getCourse = async (req, res) => {

  try {
    const course = await Course.findOne({ slug: req.params.slug });

    res.status(200).render('course', {
      course: course,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.enrollCourse = async (req, res) => {
  

  try {
    const user = await User.findById(req.session.userID);
    await user.courses.push({_id:req.body.course_id});
    await user.save();

    res.status(400).redirect('/')

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.releaseCourse = async (req, res) => {
  try {    
    const user = await User.findById(req.session.userID);
    await user.courses.pull({_id:req.body.course_id});
    await user.save();

    res.status(400).redirect('/')

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

