import { Specification } from "../entities/Specification";

interface ISpecifationsRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecifationsRepository {
    findByName(name: string): Promise<Specification>;
    list(): Promise<Specification[]>;
    create({ name, description }: ISpecifationsRepositoryDTO): Promise<void>;
}

export { ISpecifationsRepository, ISpecifationsRepositoryDTO };
