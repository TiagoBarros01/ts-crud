import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { GetCategoryController } from "../controllers/GetCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

export const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController().handle;
const getAllCategoriesController = new GetAllCategoriesController().handle;
const getCategoryController = new GetCategoryController().handle;
const deleteCategoryController = new DeleteCategoryController().handle;
const updateCategoryController = new UpdateCategoryController().handle;

categoryRoutes.post("/categories", createCategoryController);
categoryRoutes.get("/categories", getAllCategoriesController);
categoryRoutes.get("/categories/:id", getCategoryController);
categoryRoutes.put("/categories/:id", updateCategoryController);
categoryRoutes.delete("/categories/:id", deleteCategoryController);
