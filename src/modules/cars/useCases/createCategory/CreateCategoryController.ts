/* eslint-disable prettier/prettier */
import "reflect-metadata"
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
        const { name, description } = req.body;
        await createCategoryUseCase.execute({ name, description });
        return res.status(201).send({ name, description });
    }
}
export { CreateCategoryController };