// controllers to hanldle the requests and responses
import type { Controller } from '../types';
import { getTokenBodyValidation, postRegisterBodyValidation } from '../validations/Auth';
import { AuthService } from '../services/Auth';

export const AuthController: Controller = {
  getToken: async (request, reply) => {
    const result = getTokenBodyValidation.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: result.error.message });
    }

    const response = await AuthService.getToken(result.data, reply);
    if (!response.auth) {
      return reply.status(401).send({ error: 'Invalid credentials' });
    }

    return reply.status(200).send({ token: response.token });
  },

  register: async (request, reply) => {
    const result = postRegisterBodyValidation.safeParse(request.body);
    if (!result.success) {
      return reply.status(400).send({ error: result.error.message });
    }

    const response = await AuthService.register(result.data, reply);
    if (!response.success) {
      return reply.status(400).send({ error: response.message });
    }

    return reply.status(201).send({ message: response.message });
  }
};
