import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
        const { email, password } = req.body;
        const token = await authenticateUserUseCase.execute({ email, password });
        return res.json(token);
    }
}
export { AuthenticateUserController };