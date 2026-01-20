import { Router } from "express";
import cors from "cors";

import idxCon from "../controllers/indexController.js";

import signupRouter from "./signupRouter.js";
import loginRouter from "./loginRouter.js";
import blogsRouter from "./blogsRouter.js";

const corsOpts = {
  origin: ["https://localhost:5173"],
};

const indexRouter = Router();

indexRouter.get("/", idxCon.get);
indexRouter.use("/signup", cors(corsOpts), signupRouter);
indexRouter.use("/login", cors(corsOpts), loginRouter);
indexRouter.use("/blogs", cors(corsOpts), blogsRouter);

indexRouter.all("/{*lost}", idxCon.getLost);

export default indexRouter;
