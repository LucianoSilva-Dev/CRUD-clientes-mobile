import { fastifyPlugin } from 'fastify-plugin';
import jwtPlugin from '@fastify/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { JWT_SECRET } from '../server';

export const authPlugin = fastifyPlugin(async (fastify) => {
  fastify.register(jwtPlugin, {
    secret: JWT_SECRET,
  });
});

export const authMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.status(401).send({ error: 'Unauthorized' });
  }
};
