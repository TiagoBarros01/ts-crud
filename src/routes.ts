import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";

export const routes = Router();

const createCategoryController = new CreateCategoryController().handle;

routes.post('/categories', createCategoryController)
