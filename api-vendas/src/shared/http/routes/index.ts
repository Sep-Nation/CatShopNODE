import { Router } from 'express';
import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';

const routes = Router();

routes.use('/api/v1/products', productsRouter);
routes.use('/api/v1/users', usersRouter);
routes.use('/security/v1/sessions', sessionsRouter);

export default routes;
