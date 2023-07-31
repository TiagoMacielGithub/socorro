import { Router } from "express";
import UserController from "../controllers/user.controllers";

const router = Router();

router.post('/login', new UserController().loginUser)
router.post('/signUp', new UserController().signUpUser)

export default router;
