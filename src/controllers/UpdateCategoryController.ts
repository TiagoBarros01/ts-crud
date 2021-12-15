import { Request, Response } from "express";
import {
  CategoryUpdateRequest,
  UpdateCategoryService,
} from "../services/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as Pick<CategoryUpdateRequest, "id">;
    const { name, description } = req.body as Omit<CategoryUpdateRequest, "id">;

    const service = new UpdateCategoryService();

    const result = await service.execute({
      id,
      name,
      description,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
