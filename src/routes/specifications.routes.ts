import { Router } from "express";
import { createSpecificationController } from "../cars/useCases/createSpecification";
import { listSpecificationController } from "../cars/useCases/listSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (req, res) => {
    return createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
    return listSpecificationController.handle(req, res);
});

export { specificationRoutes };
