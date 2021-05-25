import { ISpecifationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    // eslint-disable-next-line prettier/prettier
    constructor(private specificationsRepository: ISpecifationsRepository) { }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("specifications already exists");
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
