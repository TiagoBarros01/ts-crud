import { getRepository } from "typeorm";
import { Categories } from "../entities/Categories";

export type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Categories | Error> {
    if (!name || !description) {
      return new Error("Name and Description cannot be empty");
    }

    const repo = getRepository(Categories);

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
