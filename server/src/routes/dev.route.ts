import { Router } from "express";
import devController from "../controller/dev.controller";

const devRouter = Router();

devRouter.put('/users/truncate', devController.truncateUsers);

export default devRouter;