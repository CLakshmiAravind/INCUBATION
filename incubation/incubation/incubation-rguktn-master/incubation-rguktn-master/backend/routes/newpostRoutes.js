const express = require("express");
const {
  getPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPosts,
} = require("../controllers/newpostController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getAllPosts);
router.route("/getbyuser").get(protect, getPosts);
router.route("/create").post(protect, createPost);
router
  .route("/:id")
  .get(getPostById)
  .put(protect, updatePost)
  .delete(protect, deletePost);

module.exports = router;
