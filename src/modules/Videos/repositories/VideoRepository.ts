import { Repository } from "typeorm";
import { CreateVideoDTO } from "../dtos/CreateVideoRepositoryDTO";
import { Video } from "../entities/Video";
import { VideoRepositoryData } from "./types/VideoRepositoryData";

export class VideoRepository implements VideoRepositoryData {
  ormRepository: Repository<Video>;

  public async save(video: Video): Promise<Video> {
    return this.ormRepository.save(video);
  }

  public async create(data: CreateVideoDTO): Promise<Video> {
    const video = this.ormRepository.create(data);

    await this.ormRepository.save(video);

    return video;
  }

  public async remove(videos: Video[]): Promise<void> {
    await this.ormRepository.remove(videos);
  }

  public async findAll(): Promise<Video[]> {
    const videos = await this.ormRepository.find();

    return videos;
  }

  public async findByCategoryId(category_id: string): Promise<Video> {
    const video = await this.ormRepository.findOne({
      where: {
        category_id,
      },
    });

    return video;
  }

  public async findById(id: string): Promise<Video> {
    const video = await this.ormRepository.findOne(id);

    return video;
  }

  public async findByName(name: string): Promise<Video> {
    const video = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return video;
  }
}
