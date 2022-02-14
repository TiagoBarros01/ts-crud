import { CategoryRepository } from "../../Categories/repositories/CategoryRepository";
import { CreateVideoDTO } from "../dtos/CreateVideoRepositoryDTO";
import { VideoRepository } from "../repositories/VideoRepository";

export class CreateVideoService {
  private categoryRepository = new CategoryRepository();
  private videoRepository = new VideoRepository();

  async execute({ name, description, duration, category_id }: CreateVideoDTO) {
    const categoryExists = this.categoryRepository.findById(category_id);

    if (!categoryExists) {
      return new Error("Category doesn't exists'");
    }

    const video = await this.videoRepository.create({
      name,
      description,
      category_id,
      duration,
    });

    await this.videoRepository.save(video);

    return video;
  }
}
