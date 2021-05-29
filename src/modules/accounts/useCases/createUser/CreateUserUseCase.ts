import { IUsersRepository } from "../../repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { hash } from "bcrypt";
@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {

    }
    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const userAlreadyExist = await this.usersRepository.findByEmail(email);
        if (userAlreadyExist) {
            throw new Error("User already exist");
        }
        const passHash = await hash(password, 8);
        await this.usersRepository.create({ name, email, password: passHash, driver_license });
    }
}
export { CreateUserUseCase };