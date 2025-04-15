import { Router } from "express";
import authRouter from "./auth.route";
import devRouter from "./dev.route";

const routes = Router();

routes.use('/dev', devRouter);

routes.use('/auth', authRouter);

export default routes;