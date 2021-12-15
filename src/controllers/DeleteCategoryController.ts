import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

type RequestParams = {
  id: string
}

export class DeleteCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
