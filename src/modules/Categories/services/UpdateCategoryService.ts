import { CategoryRepository } from "../repositories/CategoryRepository";
import { CategoryRequest } from "./CreateCategoryService";

export type CategoryUpdateRequest = CategoryRequest & {
  id: string;
};

export class UpdateCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute({ name, description, id }: CategoryUpdateRequest) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      return new Error("Category doesn't exists");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await this.categoryRepository.save(category);

    return category;
  }
}
