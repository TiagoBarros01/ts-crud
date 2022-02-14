import { Request, Response } from "express";
import { DeleteVideoService } from "../services/DeleteVideoService";

type RequestParams = {
  id: string;
};

export class DeleteVideoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    const service = new DeleteVideoService();

    const result = service.execute(id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
