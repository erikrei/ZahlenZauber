import { Router } from "express";
import devController from "../controller/dev.controller";

const devRouter = Router();

devRouter.put('/users-table/truncate', devController.truncateUsers);
devRouter.post('/users-table/create', devController.createUsers);

export default devRouter;