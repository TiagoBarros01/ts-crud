import { VideoRepository } from "../repositories/VideoRepository";

export class DeleteVideoService {
  private videoRepository = new VideoRepository();

  async execute(id: string) {
    const videoExists = await this.videoRepository.findById(id);

    if (!videoExists) {
      return new Error("Video does not exists!");
    }

    await this.videoRepository.remove([videoExists]);

    return {};
  }
}
