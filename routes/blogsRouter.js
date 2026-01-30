import { Router } from "express";

import blgCon from "../controllers/blogsController.js";
import authCon from "../controllers/authenticationController.js";

const blogsRouter = Router();

blogsRouter.post("/new", authCon.admin, blgCon.postBlogPost);
blogsRouter.get("/:id/comments", blgCon.getBlogPostComments);
blogsRouter.post("/:id/comments", blgCon.postBlogPostComment);
blogsRouter.post("/:id", authCon.admin, blgCon.postToggleIsPublished);
blogsRouter.get("/:id", blgCon.getBlogPost);
blogsRouter.delete("/:id", authCon.admin, blgCon.deleteBlogPost);
blogsRouter.get("/", blgCon.get);

export default blogsRouter;
