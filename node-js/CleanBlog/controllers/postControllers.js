const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
    const post = await Post.find({});
    res.render('index', {
        post,
    })
};

exports.updatePost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

