const express = require('express');
const courseController = require('../controllers/courseControllers');

const router = express.Router();

router.route('/').post(courseController.createCourese); // localhost:3000/courses


module.exports = router;