const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
