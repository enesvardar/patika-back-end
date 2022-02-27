const express = require('express');
const postController = require('./controllers/postControllers');
const router = express.Router();

router.route('/newpost').get(postController.addPost);
router.route('/updatepost/:id').get(postController.updatePost);
router.route('/post/del/:id').get(postController.delPost);

module.exports = router;


