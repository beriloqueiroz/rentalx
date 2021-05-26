/* eslint-disable prettier/prettier */
import { ISpecifationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecifationsRepository) { }
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("specification already exists");
        }
        this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationService };
