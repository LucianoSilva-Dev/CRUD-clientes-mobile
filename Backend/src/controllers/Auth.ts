// controllers to hanldle the requests and responses
import type { Controller, getTokenAuthBody, registerAuthBody } from '../types';
import { AuthService } from '../services/Auth';

export const AuthController: Controller = {
  getToken: async (request, reply) => {
    const response = await AuthService.getToken(
      request.body as getTokenAuthBody,
      reply,
    );
    if (!response.auth) {
      return reply.status(401).send({ error: 'Invalid credentials' });
    }

    return reply.status(200).send({ token: response.token });
  },

  register: async (request, reply) => {
    const response = await AuthService.register(
      request.body as registerAuthBody,
    );
    if (!response.success) {
      return reply.status(400).send({ error: response.message });
    }

    return reply.status(201).send({ message: response.message });
  },
};
