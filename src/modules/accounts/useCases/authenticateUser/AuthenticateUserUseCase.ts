import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";
interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: UsersRepository
    ) {

    }
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password incorrect", 401);
        }
        const passwordMatch = compare(user.password, password);
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect", 401);
        }
        const token = sign({}, "brogovias", {
            subject: user.id,
            expiresIn: "1d"
        });//md5 aleatorio
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        }
        return tokenReturn;
    }
}
export { AuthenticateUserUseCase };