import { getRepository } from "typeorm";
import { Categories } from "../entities/Categories";

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Categories);

    const categories = await repo.find();

    return categories;
  }
}
