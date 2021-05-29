import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouts = Router();
const createUserController = new CreateUserController();
usersRouts.post("/", createUserController.handle)

export { usersRouts };
