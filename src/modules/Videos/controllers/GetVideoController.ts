import { Request, Response } from "express";
import { GetVideoService } from "../services/GetVideoService";

type RequestParams = {
  id: string;
}

export class GetVideoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params as RequestParams;

    const service = new GetVideoService();

    const video = await service.execute(id);

    return res.json(video);
  }
}
