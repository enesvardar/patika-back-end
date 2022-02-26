const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getAddPostPage = (req, res) => {
    res.render('add_post');
};

exports.getPostPage = async (req, res) => {
    console.log(req.params.id)
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    });
};

exports.getEditPage = async (req, res) => {
    console.log("edit")
    const post = await Post.findById(req.params.id);
    res.render('edit', {
        post
    });
};