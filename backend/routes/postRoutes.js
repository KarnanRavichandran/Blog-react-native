const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
    createPostController,
    getAllPostsContoller,
    getUserPostsController,
    deletePostController,
    updatePostController,
  } = require("../controllers/postController");
const postRouter = express.Router();

postRouter.post("/create-post", requireSingIn, createPostController);
postRouter.get("/get-all-post", getAllPostsContoller);
postRouter.get("/get-user-post", requireSingIn, getUserPostsController);
postRouter.delete("/delete-post/:id", requireSingIn, deletePostController);
postRouter.put("/update-post/:id", requireSingIn, updatePostController);

module.exports = postRouter;