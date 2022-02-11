import { getRepository } from "typeorm";
import { Categories } from "../entities/Categories";

export class DeleteCategoryService {
  async execute(id: string): Promise<Error | {}> {
    const repo = getRepository(Categories);

    if (!(await repo.findOne(id))) {
      return new Error("Category doesn't exists!");
    }

    await repo.delete(id);

    return {};
  }
}
