import { Categories } from "../entities/Categories";
import { CategoryRepository } from "../repositories/CategoryRepository";

export type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Categories | Error> {
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
