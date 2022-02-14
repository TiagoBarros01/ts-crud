import { Request, Response } from "express";
import { CreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { CreateCategoryService } from "../services/CreateCategoryService";

type RequestParams = CreateCategoryDTO;

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name, description } = req.body as RequestParams;

    const service = new CreateCategoryService();

    const result = await service.execute({
      name,
      description,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
