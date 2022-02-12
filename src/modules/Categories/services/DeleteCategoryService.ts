import { CategoryRepository } from "../repositories/CategoryRepository";

export class DeleteCategoryService {
  private categoryRepository = new CategoryRepository();

  async execute(id: string): Promise<Error | {}> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      return new Error("Category doesn't exists!");
    }

    await this.categoryRepository.remove([category]);

    return {};
  }
}
