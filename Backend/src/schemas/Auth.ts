// zod schemas for validation and response of the routes
import type { EntitySchema } from '../types';
import { genericError, schemaValidationError } from './Common';
import z from 'zod';
import {
  postRegisterAuthBodyValidation,
  getTokenAuthBodyValidation,
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
      body: getTokenAuthBodyValidation,
      response: {
        200: tokenResponse,
        400: schemaValidationError,
        401: genericError,
      },
      summary: 'Get the JWT token',
    }
  },

  register: {
    schema: {
      body: postRegisterAuthBodyValidation,
      response: {
        201: userRegisterResponse,
        400: schemaValidationError
      },
      summary: 'Register a new user',
    }
  },
};
