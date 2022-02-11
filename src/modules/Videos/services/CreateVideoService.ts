import { getRepository } from "typeorm";
import { Categories } from "../../Categories/entities/Categories";
import { Video } from "../entities/Video";

export type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const videoRepo = getRepository(Video);
    const categoryRepo = getRepository(Categories);

    const categoryExists = categoryRepo.findOne(category_id);

    if (!categoryExists) {
      return new Error("Category doesn't exists'");
    }

    const video = videoRepo.create({
      name,
      description,
      category_id,
      duration,
    });

    await videoRepo.save(video);

    return video;
  }
}
