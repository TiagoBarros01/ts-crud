import { getRepository } from "typeorm";
import { CreateVideoDTO } from "../dtos/CreateVideoRepositoryDTO";
import { Videos } from "../entities/Videos";
import { VideoRepository } from "../repositories/VideoRepository";

export type UpdateVideoRequest = CreateVideoDTO & {
  id: string;
};

export class UpdateVideoService {
  private videoRepository = new VideoRepository();

  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: UpdateVideoRequest) {
    const video = await this.videoRepository.findById(id);

    if (!video) {
      return new Error("Video does not exists");
    }

    const updatedVideo = Object.assign(video, {
      name,
      description,
      duration,
      category_id,
    });

    await this.videoRepository.save(updatedVideo);

    return video;
  }
}
