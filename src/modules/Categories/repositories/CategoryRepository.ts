import { getRepository, Repository } from "typeorm";
import { CreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { Categories } from "../entities/Categories";
import { CategoryRepositoryData } from "./types/CategoryRepositoryData";

export class CategoryRepository implements CategoryRepositoryData {
  public ormRepository: Repository<Categories>;

  constructor() {
    this.ormRepository = getRepository(Categories);
  }

  public async create(data: CreateCategoryDTO): Promise<Categories> {
    const category = this.ormRepository.create(data);

    await this.ormRepository.save(category);

    return category;
  }

  public async remove(categories: Categories[]): Promise<void> {
    await this.ormRepository.remove(categories);
  }

  public async save(category: Categories): Promise<Categories> {
    const savedCategory = await this.ormRepository.save(category);

    return savedCategory;
  }

  public async findById(id: string): Promise<Categories> {
    const category = await this.ormRepository.findOne(id);

    return category;
  }

  public async findByName(name: string): Promise<Categories> {
    const category = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return category;
  }

  public async findAll(): Promise<Categories[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }
}
