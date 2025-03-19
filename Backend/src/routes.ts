import z from 'zod';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

export const routes: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/',
    {
      schema: {
        response: {
          200: z.object({
            hello: z.string(),
          }),
          400: z.object({
            error: z.string(),
          })
        },
      },
    },
    (request) => {
      return { hello: 'world' };
    },
  );
}
