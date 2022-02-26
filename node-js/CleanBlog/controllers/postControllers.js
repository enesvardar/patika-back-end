const Post = require('../models/Post');

exports.getAllPost = async (req, res) => {
  const post = await Post.find({});
  res.render('index', {
    post,
  });
};

exports.addPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {

  const post = await Post.findOne({ _id: req.params.id });
  console.log(req.body)
  console.log(post)

  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save()

  res.redirect('/');

};

exports.delPost = async (req, res) => {

  await Post.findByIdAndRemove(req.params.id);
  res.redirect('/');

};
