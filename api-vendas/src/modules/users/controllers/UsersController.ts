import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import ShowUserService from '../services/ShowUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return response.json(users);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const showUser = new ShowUserService();

    const user = await showUser.execute({ email });

    return response.json(user);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, password, avatar } = request.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      name,
      email,
      password,
      avatar,
    });

    return response.json(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ email });

    return response.json([]);
  }
}
