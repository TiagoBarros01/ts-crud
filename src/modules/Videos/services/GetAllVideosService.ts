import { VideoRepository } from "../repositories/VideoRepository";

export class GetAllVideosService {
  private videoRepository = new VideoRepository();

  async execute() {
    const videos = await this.videoRepository.findAll();

    return videos;
  }
}
