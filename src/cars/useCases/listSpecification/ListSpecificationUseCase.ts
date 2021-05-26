import { Specification } from "../../model/Specification";
import { ISpecifationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationUseCase {
    constructor(private specificationsRepository: ISpecifationsRepository) {
        console.log("");
    }
    execute(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export { ListSpecificationUseCase };
