import { Specification } from "../model/Specification";

interface ISpecifationsRepositoryDTO {
    name;
    description;
}

interface ISpecifationsRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create({ name, description }: ISpecifationsRepositoryDTO): void;
}

export { ISpecifationsRepository, ISpecifationsRepositoryDTO };
