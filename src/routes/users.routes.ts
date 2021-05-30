import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer";
import uploadConfig from "../config/uploads"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouts = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));
const createUserController = new CreateUserController();
usersRouts.post("/", createUserController.handle)

const updateUserAvatarController = new UpdateUserAvatarController();
usersRouts.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

export { usersRouts };
