// zod schemas for validation and response of the routes
import type { EntitySchema } from '../types';
import { genericError } from './Common';
import z from 'zod';
import {
  postRegisterBodyValidation,
  getTokenBodyValidation,
} from '../validations/Auth';

export const tokenResponse = z.object({
  token: z.string(),
});

export const userRegisterResponse = z.object({
  message: z.string(),
});

export const AuthSchema: EntitySchema = {
  getToken: {
    schema: {
      body: getTokenBodyValidation,
      response: {
        200: tokenResponse,
        400: genericError,
        401: genericError,
      },
      summary: 'Get the JWT token',
    },
    attachValidation: true,
  },

  register: {
    schema: {
      body: postRegisterBodyValidation,
      response: {
        201: userRegisterResponse,
        400: genericError,
      },
      summary: 'Register a new user',
    },
    attachValidation: true,
  },
};
