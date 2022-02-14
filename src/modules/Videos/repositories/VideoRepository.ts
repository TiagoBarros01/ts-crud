import { getRepository, Repository } from "typeorm";
import { CreateVideoDTO } from "../dtos/CreateVideoRepositoryDTO";
import { Videos } from "../entities/Videos";
import { VideoRepositoryData } from "./types/VideoRepositoryData";

export class VideoRepository implements VideoRepositoryData {
  public ormRepository: Repository<Videos>;

  constructor() {
    this.ormRepository = getRepository(Videos);
  }

  public async save(video: Videos): Promise<Videos> {
    return this.ormRepository.save(video);
  }

  public async create(data: CreateVideoDTO): Promise<Videos> {
    const video = this.ormRepository.create(data);

    await this.ormRepository.save(video);

    return video;
  }

  public async remove(videos: Videos[]): Promise<void> {
    await this.ormRepository.remove(videos);
  }

  public async findAll(): Promise<Videos[]> {
    const videos = await this.ormRepository.find({
      relations: ["category"],
    });

    return videos;
  }

  public async findByCategoryId(category_id: string): Promise<Videos> {
    const video = await this.ormRepository.findOne({
      where: {
        category_id,
      },
    });

    return video;
  }

  public async findById(id: string): Promise<Videos> {
    const video = await this.ormRepository.findOne(id);

    return video;
  }

  public async findByName(name: string): Promise<Videos> {
    const video = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return video;
  }
}
