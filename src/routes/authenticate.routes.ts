import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRouts = Router();

const authenticateUserController = new AuthenticateUserController();
authenticateRouts.post("/sessions", authenticateUserController.handle);

export { authenticateRouts };