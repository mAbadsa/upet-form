import { Router } from "express";
import { signup } from "../controller";
import { signupValidation } from "../middleware/validation";

const router: Router = Router();

router.post("/signup", signupValidation, signup);

export default router;

