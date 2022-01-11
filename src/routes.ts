import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";

export const routes = Router();

const createCategoryController = new CreateCategoryController().handle;
const getAllCategoriesController = new GetAllCategoriesController().handle;
const deleteCategoryController = new DeleteCategoryController().handle;
const updateCategoryController = new UpdateCategoryController().handle;

const createVideoController = new CreateVideoController().handle;
const getAllVideosController = new GetAllVideosController().handle;
const deleteVideoController = new DeleteVideoController().handle;
const updateVideoController = new UpdateVideoController().handle;

routes.post("/categories", createCategoryController);
routes.get("/categories", getAllCategoriesController);
routes.put("/categories/:id", updateCategoryController);
routes.delete("/categories/:id", deleteCategoryController);

routes.post("/videos", createVideoController);
routes.get("/videos", getAllVideosController);
routes.delete("/videos/:id", deleteVideoController);
routes.put("/videos/:id", updateVideoController);
