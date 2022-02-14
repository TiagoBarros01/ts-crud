import { Router } from "express";
import { categoryRoutes } from "./modules/Categories/http/categories.routes";
import { videosRoutes } from "./modules/Videos/http/videos.routes";

export const routes = Router();

routes.use(videosRoutes);
routes.use(categoryRoutes);
