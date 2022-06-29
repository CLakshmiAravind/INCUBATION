const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    component: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
      required: true,
    },
    emaill: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    costEstimated: {
      type: String,
      required: true,
    },
    outline: {
      type: String,
      required: true,
    },
    abstract: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", noteSchema);

module.exports = Post;
