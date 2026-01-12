import { Router } from "express";

import idxCon from "../controllers/indexController.js";

import signupRouter from "./signupRouter.js";
import loginRouter from "./loginRouter.js";
import blogsRouter from "./blogsRouter.js";

const indexRouter = Router();

indexRouter.get("/", idxCon.get);
indexRouter.use("/signup", signupRouter);
indexRouter.use("/login", loginRouter);
indexRouter.use("/blogs", blogsRouter);

indexRouter.all("/{*lost}", idxCon.getLost);

export default indexRouter;
