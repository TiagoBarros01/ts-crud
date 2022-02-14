import { CategoryRepository } from "../repositories/CategoryRepository";

export class GetCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute(id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new Error("Category does not exists!");
    }

    return category;
  }
}
