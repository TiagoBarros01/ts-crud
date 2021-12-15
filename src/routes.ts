import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

export const routes = Router();

const createCategoryController = new CreateCategoryController().handle;
const getAllCategoriesController = new GetAllCategoriesController().handle;
const deleteCategoryController = new DeleteCategoryController().handle;
const updateCategoryController = new UpdateCategoryController().handle;

routes.post('/categories', createCategoryController)
routes.get('/categories', getAllCategoriesController)
routes.put('/categories/:id', updateCategoryController)
routes.delete('/categories/:id', deleteCategoryController)
