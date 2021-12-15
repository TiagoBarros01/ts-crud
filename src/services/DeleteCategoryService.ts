import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class DeleteCategoryService {
  async execute(id: string): Promise<Error | {}> {
    const repo = getRepository(Category);

    if (!(await repo.findOne(id))) {
      return new Error("Category doesn't exists!");
    }

    await repo.delete(id);

    return {};
  }
}
