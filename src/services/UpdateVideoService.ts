import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { VideoRequest } from "./CreateVideoService";

export type UpdateVideoRequest = VideoRequest & {
  id: string;
};

export class UpdateVideoService {
  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: UpdateVideoRequest) {
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    if (!video) {
      return new Error("Video does not exists");
    }

    video.category_id = category_id ? category_id : video.category_id;
    video.description = description ? description : video.description;
    video.name = name ? name : video.name;
    video.duration = duration ? duration : video.duration;

    await repo.save(video);

    return video;
  }
}
