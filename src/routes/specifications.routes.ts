import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post("/", createSpecificationController.handle);

const listSpecificationController = new ListSpecificationController();
specificationRoutes.get("/", listSpecificationController.handle);

export { specificationRoutes };
