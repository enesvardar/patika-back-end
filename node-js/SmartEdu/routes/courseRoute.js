const express = require('express');
const courseController = require('../controllers/courseControllers');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route('/').post(courseController.createCourse); // localhost:3000/courses
router.route('/').get(courseController.getAllCourses); // localhost:3000/courses
router.route('/course/:slug').get(courseController.getCourse); // localhost:3000/courses
router.route('/enroll').post(courseController.enrollCourse); // localhost:3000/courses
router.route('/release').post(courseController.releaseCourse);

module.exports = router;