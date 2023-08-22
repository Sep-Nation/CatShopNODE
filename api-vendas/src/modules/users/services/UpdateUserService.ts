import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRespository";
import User from "../typeorm/entities/User";

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

class UpdateUserService {
  public async execute({
    name,
    email,
    password,
    avatar,
  }: IRequest): Promise<User>{
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne(email);

    if (!user) throw new AppError('User not found.')

    const usersExists = await usersRepository.findByName(name);

    if (usersExists && name !== user.name) throw new AppError('There is already one user with this name');

    user.name = name;
    user.email = email;
    user.password = password;
    user.avatar = avatar;

    await usersRepository.save(user);

    return user;

  }
}

export default UpdateUserService;
