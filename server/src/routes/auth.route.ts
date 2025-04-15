import { Router } from "express";
import authController from "../controller/auth.controller";

const authRouter = Router();

authRouter.post('/login', authController.postLogin);
authRouter.post('/register', authController.postRegister);

export default authRouter;