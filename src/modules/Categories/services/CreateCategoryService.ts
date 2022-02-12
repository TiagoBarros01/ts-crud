import { CreateCategoryDTO } from "../dtos/CreateCategoryDTO";
import { Categories } from "../entities/Categories";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CreateCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute({
    name,
    description,
  }: CreateCategoryDTO): Promise<Categories | Error> {
    if (!name || !description) {
      return new Error("Name and Description cannot be empty");
    }

    const alreadyHasCategory = await this.categoryRepository.findByName(name);

    if (alreadyHasCategory) {
      return new Error("Category already exists");
    }

    const category = await this.categoryRepository.create({
      name,
      description,
    });

    await this.categoryRepository.save(category);

    return category;
  }
}
