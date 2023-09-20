import { Router } from "express";
import * as Controller from "../../controllers/auth.controller";
import { findUser } from "../../middlewares/auth.middleware";
const router = Router();

router.post("/signup", findUser, Controller.signUp);
router.post("/signin", Controller.signIn);

export default router;
