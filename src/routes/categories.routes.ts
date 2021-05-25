import { Router } from "express";
import { createCategoryController } from "../cars/useCases/createCategory/index";
import { listCategoryController } from "../cars/useCases/listCategory/index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
});

export { categoriesRoutes };
