import { Router } from "express";

import authCon from "../controllers/authenticationController.js";
import usrCon from "../controllers/userController.js";
import lgtCon from "../controllers/logoutController.js";

const userRouter = Router();

userRouter.get("/:id", usrCon.get);
userRouter.delete("/:id", authCon.user, usrCon.del, lgtCon.post);

export default userRouter;
