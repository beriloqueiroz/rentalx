import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../cars/useCases/createCategory/index";
import { importCategoryController } from "../cars/useCases/importCategory";
import { listCategoryController } from "../cars/useCases/listCategory/index";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
