import { Repository } from "typeorm";
import { CreateVideoDTO } from "../../dtos/CreateVideoRepositoryDTO";
import { Videos } from "../../entities/Videos";

export interface VideoRepositoryData {
  ormRepository: Repository<Videos>;
  findById(id: string): Promise<Videos | undefined>;
  findByName(name: string): Promise<Videos | undefined>;
  findByCategoryId(categoryId: string): Promise<Videos | undefined>;
  findAll(): Promise<Videos[]>;
  create(data: CreateVideoDTO): Promise<Videos>;
  save(video: Videos): Promise<Videos>;
  remove(videos: Videos[]): Promise<void>;
}
