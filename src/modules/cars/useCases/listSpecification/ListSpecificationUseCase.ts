import { Specification } from "../../entities/Specification";
import { ISpecifationsRepository } from "../../repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";
@injectable()
class ListSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecifationsRepository) {
    }
    async execute(): Promise<Specification[]> {
        const list = await this.specificationsRepository.list();
        return list;
    }
}

export { ListSpecificationUseCase };
