const Courese = require('../models/Course');
const Category = require('../models/Category');

exports.createCourse = async (req, res) => {
  
  const course = await Courese.create(req.body);
  console.log("naber")

  res.status(201).json({
    status: 'success',
    course,
  });
};

exports.getAllCourses = async (req, res) => {

  const categorySlug = req.query.categories;
  const category = await Category.findOne({slug:categorySlug})

  let filter = {};
  if(categorySlug) {
    filter = {category:category._id}
  }
  const courses = await Course.find(filter);

  console.log(courses);

  res.status(201).render('courses', {
    courses: courses,
    categories:categories,
    page_name: 'courses',
  });
};

exports.getCourse = async (req, res) => {

  try {
    const course = await Courese.findOne({slug:req.params.slug});
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
