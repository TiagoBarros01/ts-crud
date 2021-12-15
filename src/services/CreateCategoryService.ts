import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    if (!name || !description) {
      return new Error("Name and Description cannot be empty");
    }

    const repo = getRepository(Category);

    if (await repo.findOne({ name })) {
      return new Error("Category already exists");
    }

    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
