import { Router } from "express";

import sgnCon from "../controllers/signupController.js";

const signupRouter = Router();

signupRouter.get("/", sgnCon.get);
signupRouter.post("/", sgnCon.post);

export default signupRouter;
