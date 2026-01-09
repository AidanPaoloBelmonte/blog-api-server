import { Router } from "express";

import sgnCon from "../controllers/signupController.js";
import vldCon from "../controllers/validationController.js";

const signupRouter = Router();

signupRouter.get("/", sgnCon.get);
signupRouter.post("/", vldCon.userDetailsValidations, sgnCon.post);

export default signupRouter;
