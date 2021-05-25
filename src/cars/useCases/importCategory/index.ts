import { MemoryCategoryRepositories } from "../../repositories/implementations/MemoryCategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = MemoryCategoryRepositories.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
);

export { importCategoryController };
