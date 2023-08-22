import { Router } from "express";
import UsersController from "../controllers/UsersController";
import { celebrate, Joi, Segments } from 'celebrate';

const usersRouter = Router();
const usersController = new UsersController();

// Get

usersRouter.get('/', usersController.index);
usersRouter.get(
  '/:email',
  celebrate({
    [Segments.PARAMS]: {
      email: Joi.string().required(),
    },
  }),
  usersController.show,
);

// Post
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
)

// Put
usersRouter.put(
  '/:email',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      avatar: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  usersController.update,
)

// Delete
usersRouter.delete(
  '/:email',
  celebrate({
    [Segments.PARAMS]: {
      email: Joi.string().required(),
    },
  }),
  usersController.delete,
)

export default usersRouter;
