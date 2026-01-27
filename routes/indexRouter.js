import { Router } from "express";
import cors from "cors";

import idxCon from "../controllers/indexController.js";
import authCon from "../controllers/authenticationController.js";
import lgtCon from "../controllers/logoutController.js";

import signupRouter from "./signupRouter.js";
import loginRouter from "./loginRouter.js";
import blogsRouter from "./blogsRouter.js";
import userRouter from "./userRouter.js";

const corsOpts = {
  origin: ["https://localhost:5173"],
};

const indexRouter = Router();

indexRouter.get("/", idxCon.get);
indexRouter.use("/signup", cors(corsOpts), signupRouter);
indexRouter.use("/login", cors(corsOpts), loginRouter);
indexRouter.use("/blogs", cors(corsOpts), blogsRouter);
indexRouter.use("/user", cors(corsOpts), userRouter);
indexRouter.post("/logout", cors(corsOpts), authCon.user, lgtCon.post);

indexRouter.all("/{*lost}", idxCon.getLost);

export default indexRouter;
