import { getRepository } from "typeorm";
import { Categories } from "../entities/Categories";
import { CategoryRequest } from "./CreateCategoryService";

export type CategoryUpdateRequest = CategoryRequest & {
  id: string;
};

export class UpdateCategoryService {
  async execute({ name, description, id }: CategoryUpdateRequest) {
    const repo = getRepository(Categories);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("Category doesn't exists");
    }

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}
