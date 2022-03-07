const Course = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
  
  console.log(req.body)
  const course = await Course.create({
    name:req.body.name,
    description: req.body.description,
    category: req.body.category,
    user: req.session.userID,
  });
  res.redirect('/courses');

};

exports.getAllCourses = async (req, res) => {

  const categories = await Category.find({});

  const courses = await Course.find({});
 
  console.log("courses");
  console.log(courses);
  console.log("categories");
  console.log(categories);

  res.status(201).render('courses', {
    courses: courses,
    categories:categories,
    page_name: 'courses',
  });

};

exports.getCourse = async (req, res) => {

  console.log(req.params.slug)  
  try {
    const course = await Course.findOne({slug:req.params.slug});
    console.log(course)
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
