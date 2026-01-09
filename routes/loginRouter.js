import { Router } from "express";

import lgnCon from "../controllers/loginController.js";

const loginRouter = Router();

loginRouter.get("/", lgnCon.get);
loginRouter.post("/", lgnCon.post);

export default loginRouter;
