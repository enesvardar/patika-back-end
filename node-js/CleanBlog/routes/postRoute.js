const express = require('express');
const postController = require('../controllers/postControllers');
const router = express.Router();

router.route('/newpost').post(postController.addPost);
router.route('/updatepost/:id').post(postController.updatePost);
router.route('/post/del/:id').get(postController.delPost);

module.exports = router;


