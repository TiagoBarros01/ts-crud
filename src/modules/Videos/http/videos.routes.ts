import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { DeleteVideoController } from "../controllers/DeleteVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";
import { GetVideoController } from "../controllers/GetVideoController";
import { UpdateVideoController } from "../controllers/UpdateVideoController";

export const videosRoutes = Router();

const createVideoController = new CreateVideoController().handle;
const getAllVideosController = new GetAllVideosController().handle;
const getVideoController = new GetVideoController().handle;
const deleteVideoController = new DeleteVideoController().handle;
const updateVideoController = new UpdateVideoController().handle;

videosRoutes.post("/videos", createVideoController);
videosRoutes.get("/videos/:id", getVideoController);
videosRoutes.get("/videos", getAllVideosController);
videosRoutes.delete("/videos/:id", deleteVideoController);
videosRoutes.put("/videos/:id", updateVideoController);
