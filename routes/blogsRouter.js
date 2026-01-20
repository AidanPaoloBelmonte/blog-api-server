import { Router } from "express";

import blgCon from "../controllers/blogsController.js";

const blogsRouter = Router();

blogsRouter.get("/:id", blgCon.getBlogPost);
blogsRouter.get("/", blgCon.get);

export default blogsRouter;
