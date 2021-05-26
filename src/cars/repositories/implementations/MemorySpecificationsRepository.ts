import { Specification } from "../../model/Specification";
import {
    ISpecifationsRepository,
    ISpecifationsRepositoryDTO,
} from "../ISpecificationsRepository";

class MemorySpecificationsRepository implements ISpecifationsRepository {
    private specifications: Specification[];
    public static INSTANCE: MemorySpecificationsRepository;
    private constructor() {
        this.specifications = [];
    }
    public static getInstance(): MemorySpecificationsRepository {
        if (!MemorySpecificationsRepository.INSTANCE) {
            MemorySpecificationsRepository.INSTANCE =
                new MemorySpecificationsRepository();
        }
        return MemorySpecificationsRepository.INSTANCE;
    }
    findByName(name: string): Specification {
        return this.specifications.find((spec) => spec.name === name);
    }
    list(): Specification[] {
        return this.specifications;
    }
    create({ name, description }: ISpecifationsRepositoryDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });
        this.specifications.push(specification);
    }
}

export { MemorySpecificationsRepository };
