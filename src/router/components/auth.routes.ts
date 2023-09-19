import { Router } from "express";
import * as Controller from "../../controllers/auth.controller";
import { findUser } from "../../middlewares/auth.middleware";
const router = Router();

router.post("/register", findUser, Controller.signUp);

export default router;
