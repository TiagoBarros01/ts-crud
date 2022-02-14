import { Request, Response } from "express";
import { GetCategoryService } from "../services/GetCategoryService";

type RequestParams = {
  id: string;
};

export class GetCategoryController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    const service = new GetCategoryService();

    const categories = await service.execute(id);

    return res.json(categories);
  }
}
