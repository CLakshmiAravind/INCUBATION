const Post = require("../models/newpostModel");
const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const { post } = require("../routes/userRoutes");

const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user._id });
  res.json(posts);
});

const createPost = asyncHandler(async (req, res) => {
  const {
    component,
    dept,
    emaill,
    title,
    category,
    costEstimated,
    outline,
    abstract,
  } = req.body;

  if (
    !component ||
    !dept ||
    !emaill ||
    !title ||
    !category ||
    !costEstimated ||
    !outline ||
    !abstract
  ) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const post = new Post({
      user: req.user._id,
      component,
      dept,
      emaill,
      title,
      category,
      costEstimated,
      outline,
      abstract,
    });

    const createdPost = await post.save();

    res.status(201).json(createdPost);
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

const updatePost = asyncHandler(async (req, res) => {
  const {
    component,
    dept,
    emaill,
    title,
    category,
    costEstimated,
    outline,
    abstract,
  } = req.body;

  const post = await Post.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (post) {
    post.component = component;
    post.dept = dept;
    post.email = emaill;
    post.title = title;
    post.category = category;
    post.costEstimated = costEstimated;
    post.outline = outline;
    post.abstract = abstract;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (post) {
    await post.remove();
    res.json({ message: "Post Removed" });
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

module.exports = {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPosts,
};
