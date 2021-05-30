import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    async findByID(id: string): Promise<User> {
        const userExist = await this.repository.findOne(id);
        return userExist;
    }
    async findByEmail(email: string): Promise<User> {
        const userExist = await this.repository.findOne({ email });
        return userExist;
    }
    async create({ name, email, driver_license, password, avatar, id }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, driver_license, password, avatar, id });
        await this.repository.save(user);
    }
}
export { UsersRepository };