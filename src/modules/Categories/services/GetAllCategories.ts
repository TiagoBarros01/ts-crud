import { CategoryRepository } from "../repositories/CategoryRepository";

export class GetAllCategoriesService {
  private categoryRepository = new CategoryRepository();

  async execute() {
    const categories = await this.categoryRepository.findAll();

    return categories;
  }
}
