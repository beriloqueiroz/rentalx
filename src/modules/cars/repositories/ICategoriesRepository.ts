import { Category } from "../entities/Category";

interface ICrateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICrateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICrateCategoryDTO };
