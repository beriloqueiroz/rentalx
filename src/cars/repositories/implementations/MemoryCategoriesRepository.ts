import { Category } from "../../model/Category";
import {
    ICategoriesRepository,
    ICrateCategoryDTO,
} from "../ICategoriesRepository";

class MemoryCategoryRepositories implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: MemoryCategoryRepositories;
    private constructor() {
        this.categories = [];
    }

    public static getInstance(): MemoryCategoryRepositories {
        if (!MemoryCategoryRepositories.INSTANCE) {
            MemoryCategoryRepositories.INSTANCE =
                new MemoryCategoryRepositories();
        }
        return MemoryCategoryRepositories.INSTANCE;
    }

    findByName(name: string): Category {
        return this.categories.find((cat) => cat.name === name);
    }
    list(): Category[] {
        return this.categories;
    }
    create({ name, description }: ICrateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            create_at: new Date(),
        });
        this.categories.push(category);
    }
}

export { MemoryCategoryRepositories };
