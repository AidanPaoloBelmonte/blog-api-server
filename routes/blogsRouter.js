import { Router } from "express";

import blgCon from "../controllers/blogsController.js";
import authCon from "../controllers/authenticationController.js";

const blogsRouter = Router();

blogsRouter.post("/new", authCon.admin, blgCon.postBlogPost);
blogsRouter.get("/:id/comments", blgCon.getBlogPostComments);
blogsRouter.post("/:id/comments", blgCon.postBlogPostComment);
blogsRouter.get("/:id", blgCon.getBlogPost);
blogsRouter.get("/", blgCon.get);

export default blogsRouter;
