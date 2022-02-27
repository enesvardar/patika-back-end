const express = require('express');
const pageController = require('../controllers/pageControllers');
const router = express.Router();

router.route('/').get(pageController.getAllPost);
router.route('/about').get(pageController.getAboutPage);
router.route('/add_post').get(pageController.getAddPostPage);
router.route('/post/:id').get(pageController.getPostPage);
router.route('/post/edit/:id').get(pageController.getEditPage);

module.exports = router;

