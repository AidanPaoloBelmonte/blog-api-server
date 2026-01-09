import { Router } from "express";

import idxCon from "../controllers/indexController.js";

import signupRouter from "./signupRouter.js";
import loginRouter from "./loginRouter.js";

const indexRouter = Router();

indexRouter.get("/", idxCon.get);
indexRouter.use("/signup", signupRouter);
indexRouter.use("/login", loginRouter);

// indexRouter.all("/{*lost}");

export default indexRouter;
