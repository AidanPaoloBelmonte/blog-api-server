import { Router } from "express";

import idxCon from "../controllers/indexController.js";
import authCon from "../controllers/authenticationController.js";
import lgtCon from "../controllers/logoutController.js";

import signupRouter from "./signupRouter.js";
import loginRouter from "./loginRouter.js";
import blogsRouter from "./blogsRouter.js";
import userRouter from "./userRouter.js";

const corsOpts = {
  origin: "https://localhost:5173",
};

const indexRouter = Router();

indexRouter.get("/", idxCon.get);
indexRouter.use("/signup", signupRouter);
indexRouter.use("/login", loginRouter);
indexRouter.use("/blogs", blogsRouter);
indexRouter.use("/user", userRouter);
indexRouter.post("/logout", authCon.user, lgtCon.post);

indexRouter.all("/{*lost}", idxCon.getLost);

export default indexRouter;
