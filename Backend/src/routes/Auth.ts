import z from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { AuthSchema } from '../schemas/Auth';
import { AddEntityWiseTags } from '../utils';
import { AuthController } from '../controllers/Auth';
import { authPlugin } from '../plugins/Auth';

export const AuthRoutes: FastifyPluginAsyncZod = async (app) => {
  AddEntityWiseTags(app, ['Auth']);
  // used to enable reply.jwtSign for the handlers
  app.register(authPlugin);

  app.post('/register', AuthSchema.register, AuthController.register);
  app.post('/login', AuthSchema.getToken, AuthController.getToken);
};
