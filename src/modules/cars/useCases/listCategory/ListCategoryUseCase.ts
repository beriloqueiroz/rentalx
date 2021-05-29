/* eslint-disable prettier/prettier */

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository) { }
    async execute(): Promise<Category[]> {
        const list = await this.categoriesRepository.list();
        return list;
    }
}

export { ListCategoryUseCase };
