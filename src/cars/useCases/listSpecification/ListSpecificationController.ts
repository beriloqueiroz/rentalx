import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {
        console.log("");
    }
    handle(req: Request, res: Response): Response {
        const list = this.listSpecificationUseCase.execute();
        return res.status(200).json(list);
    }
}

export { ListSpecificationController };
