import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";
import { container } from "tsyringe";

class ListCategoryController {
    // eslint-disable-next-line prettier/prettier
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoryUseCase = container.resolve(ListCategoryUseCase);
        const list = await listCategoryUseCase.execute();
        return res.status(201).json(list);
    }
}

export { ListCategoryController };
