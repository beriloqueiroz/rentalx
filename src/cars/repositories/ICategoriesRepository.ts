import { Category } from "../model/Category";

interface ICrateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICrateCategoryDTO): void;
}

export { ICategoriesRepository, ICrateCategoryDTO };
