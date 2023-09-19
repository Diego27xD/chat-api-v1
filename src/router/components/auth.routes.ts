import { Router } from "express";
import * as Controller from "../../controllers/auth.controller";
const router = Router();

router.post("/register", Controller.signUp);

export default router;
