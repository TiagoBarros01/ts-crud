import { Repository } from "typeorm";
import { CreateVideoDTO } from "../../dtos/CreateVideoRepositoryDTO";
import { Video } from "../../entities/Video";

export interface VideoRepositoryData {
  ormRepository: Repository<Video>;
  findById(id: string): Promise<Video | undefined>;
  findByName(name: string): Promise<Video | undefined>;
  findByCategoryId(categoryId: string): Promise<Video | undefined>;
  findAll(): Promise<Video[]>;
  create(data: CreateVideoDTO): Promise<Video>;
  save(video: Video): Promise<Video>;
  remove(videos: Video[]): Promise<void>;
}
