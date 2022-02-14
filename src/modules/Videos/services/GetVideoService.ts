import { VideoRepository } from "../repositories/VideoRepository";

export class GetVideoService {
  private videoRepository = new VideoRepository();

  async execute(id: string) {
    const video = await this.videoRepository.findById(id);

    if (!video) {
      throw new Error('Video does not exists!')
    }

    return video;
  }
}
