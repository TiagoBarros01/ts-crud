import { Request, Response } from "express";
import { CreateVideoDTO } from "../dtos/CreateVideoRepositoryDTO";
import { UpdateVideoService } from "../services/UpdateVideoService";

export type RequestParams = CreateVideoDTO & {
  id: string;
};

export class UpdateVideoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as Pick<RequestParams, 'id'>;
    const { name, duration, description, category_id } = req.body as CreateVideoDTO;

    const service = new UpdateVideoService();

    const result = await service.execute({
      id,
      name,
      duration,
      description,
      category_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
