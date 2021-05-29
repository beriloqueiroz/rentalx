import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const createUserUseCase = container.resolve(CreateUserUseCase);
        const { name, email, driver_license, password } = req.body;
        await createUserUseCase.execute({ name, email, driver_license, password });
        return res.status(201).send();
    }
}
export { CreateUserController };