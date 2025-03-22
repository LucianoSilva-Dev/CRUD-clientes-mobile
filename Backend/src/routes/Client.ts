import z from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { ClientSchema } from '../schemas/Client';
import { AddEntityWiseTags } from '../utils';

export const ClientRoutes: FastifyPluginAsyncZod = async (app) => {
  // add the especified tag to all routes
  AddEntityWiseTags(app, ['Client']);

  // get one client
  app.get('/:id', ClientSchema.get, (request, reply) => {
    return { client: 'get' };
  });

  // get all clients
  app.get('/', ClientSchema.get_all, (request, reply) => {
    return { client: 'get all' };
  });
  // register a client
  app.post('/', ClientSchema.register, (request, reply) => {
    return { client: 'register' };
  });

  // update a client's info
  app.patch('/:id', ClientSchema.update, (request, reply) => {
    return { client: 'update' };
  });

  // delete a client
  app.delete('/:id', ClientSchema.delete, (request, reply) => {
    return { client: 'delete' };
  });
};
