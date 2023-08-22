import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRespository";
import User from "../typeorm/entities/User";

interface IRequest {
  email: string;
}

class ShowUserService {
  public async execute({ email }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne(email);

    if (!user) {
      throw new AppError('User not found.')
    }

    return user;
  }
}

export default ShowUserService;
