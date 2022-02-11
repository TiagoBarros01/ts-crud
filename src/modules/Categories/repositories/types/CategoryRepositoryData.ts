import { Repository } from "typeorm";
import { CreateCategoryDTO } from "../../dtos/CreateCategoryDTO";
import { Categories } from "../../entities/Categories";

export interface CategoryRepositoryData {
  ormRepository: Repository<Categories>;
  findById(id: string): Promise<Categories | undefined>;
  findByName(name: string): Promise<Categories | undefined>;
  findAll(): Promise<Categories[]>;
  create(data: CreateCategoryDTO): Promise<Categories>;
  save(category: Categories): Promise<Categories>;
  remove(categories: Categories[]): Promise<void>;
}
