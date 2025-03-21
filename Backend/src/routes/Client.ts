import z from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

export const ClientRoutes: FastifyPluginAsyncZod = async (app) => {
  // get one client
  app.get(
    '/:id',
    (request, reply) => {
      return { client: 'get' };
    },
  );

  // get all clients
  app.get(
    '/',
    (request, reply) => {
      return { client: 'get all' };
    },
  )
    // register a client
    app.post(
      '/',
      (request, reply) => {
        return { client: 'register' };
      },
    );

    // update a client's info
    app.put(
      '/:id',
      (request, reply) => {
        return { client: 'update' };
      },
    );

    // delete a client
    app.delete(
      '/:id',
      (request, reply) => {
        return { client: 'delete' };
      },
    );
}
