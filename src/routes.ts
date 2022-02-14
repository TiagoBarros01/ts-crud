import { Router } from "express";
import { CreateCategoryController } from "./modules/Categories/controllers/CreateCategoryController";
import { CreateVideoController } from "./modules/Videos/controllers/CreateVideoController";
import { DeleteCategoryController } from "./modules/Categories/controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./modules/Categories/controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./modules/Videos/controllers/GetAllVideosController";
import { GetVideoController } from "./modules/Videos/controllers/GetVideoController";
import { DeleteVideoController } from "./modules/Videos/controllers/DeleteVideoController";
import { UpdateCategoryController } from "./modules/Categories/controllers/UpdateCategoryController";
import { UpdateVideoController } from "./modules/Videos/controllers/UpdateVideoController";

export const routes = Router();

const createCategoryController = new CreateCategoryController().handle;
const getAllCategoriesController = new GetAllCategoriesController().handle;
const getVideoController = new GetVideoController().handle;
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
routes.get("/videos/:id", getVideoController);
routes.get("/videos", getAllVideosController);
routes.delete("/videos/:id", deleteVideoController);
routes.put("/videos/:id", updateVideoController);
