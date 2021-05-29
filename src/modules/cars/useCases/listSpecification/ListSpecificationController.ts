import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { container } from "tsyringe";
class ListSpecificationController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(ListSpecificationUseCase);
        const list = await listSpecificationUseCase.execute();
        return res.status(200).json(list);
    }
}

export { ListSpecificationController };
