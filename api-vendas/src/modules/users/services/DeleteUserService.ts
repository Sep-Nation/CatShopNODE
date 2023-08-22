import AppError from "@shared/errors/AppError";
import { Request } from "express";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRespository";

interface IRequest {
  email: string;
}

class DeleteUserService {
  public async execute ({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne(email);

    if (!user) {
      throw new AppError('User not found.');
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
