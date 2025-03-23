import { fastifyPlugin } from 'fastify-plugin';
import jwtPlugin from '@fastify/jwt';
import type { FastifyReply, FastifyRequest } from 'fastify';

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  console.error('JWT_SECRET is not defined');
  process.exit(1);
}

export const authPlugin = fastifyPlugin(async (fastify) => {
  fastify.register(jwtPlugin, {
    secret: jwtSecret,
  });
});

export const authMiddleware = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
};
