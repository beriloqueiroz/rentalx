import { getRepository, Repository } from "typeorm";
import {
    ICategoriesRepository,
    ICrateCategoryDTO,
} from "../ICategoriesRepository";
import { Category } from "../../entities/Category";
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name })
        return category;
    }
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
    async create({ name, description }: ICrateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name,
        })
        await this.repository.save(category);
    }
}

export { CategoriesRepository };
