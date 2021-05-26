import { MemorySpecificationsRepository } from "../../repositories/implementations/MemorySpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationsRepository = MemorySpecificationsRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
    specificationsRepository
);
const listSpecificationController = new ListSpecificationController(
    listSpecificationUseCase
);

export { listSpecificationController };
