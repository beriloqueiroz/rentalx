/* eslint-disable prettier/prettier */
import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { container } from "tsyringe";
class CreateSpecificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
        const { name, description } = req.body;
        await createSpecificationUseCase.execute({ name, description });
        return res.status(200).send();
    }
}

export { CreateSpecificationController }
