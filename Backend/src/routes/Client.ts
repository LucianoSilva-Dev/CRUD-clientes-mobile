import z from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { ClientSchema } from '../schemas/Client';
import { AddEntityWiseTags } from '../utils';
import { ClientController } from '../controllers/Client';
import type { ControllerMethod } from '../types';
import { authPlugin } from '../plugins/Auth';

export const ClientRoutes: FastifyPluginAsyncZod = async (app) => {
  AddEntityWiseTags(app, ['Client']);
  app.register(authPlugin); // enable jwt auth

  app.get('/:id', ClientSchema.get, ClientController.get as ControllerMethod);
  app.get(
    '/',
    ClientSchema.get_all,
    ClientController.get_all as ControllerMethod,
  );
  app.post(
    '/',
    ClientSchema.register,
    ClientController.register as ControllerMethod,
  );
  app.patch(
    '/:id',
    ClientSchema.update,
    ClientController.update as ControllerMethod,
  );
  app.delete(
    '/:id',
    ClientSchema.delete,
    ClientController.delete as ControllerMethod,
  );
};
