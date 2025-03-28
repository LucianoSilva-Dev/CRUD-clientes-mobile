// zod schemas for validation and response of the routes
import type { EntitySchema } from '../types';
import z from 'zod';
import { idValidation, idAsStringValidation } from '../validations/Commom';
import { genericError } from '../schemas/Common';
import { authMiddleware } from '../plugins/Auth';

export const singleClientResponse = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const ClientSchema: EntitySchema = {
  get: {
    preHandler: [authMiddleware], // fecha a rota
    schema: {
      response: {
        200: singleClientResponse,
        400: genericError,
        401: genericError,
        404: genericError,
        500: genericError,
      },
      summary: 'Get a single client',
    },
    attachValidation: true,
  },
  get_all: {
    preHandler: [authMiddleware],
    schema: {
      response: {
        200: singleClientResponse.array(),
        400: genericError,
        401: genericError,
        500: genericError,
      },
      summary: 'Get all Clients',
    },
    attachValidation: true,
  },
  register: {
    preHandler: [authMiddleware],
    schema: {
      response: {
        201: z.object({ id: z.string() }),
        400: genericError,
      },
      summary: 'Register a client',
    }
  },
  update: {
    preHandler: [authMiddleware],
    schema: {
      response: {
        200: singleClientResponse,
        400: genericError,
        401: genericError,
        404: genericError,
        409: genericError,
        500: genericError,
      },
      summary: "Update a client's info",
    },
    attachValidation: true,
  },
  delete: {
    preHandler: [authMiddleware],
    schema: {
      response: {
        204: z.null(),
        400: genericError,
        401: genericError,
        404: genericError,
        500: genericError,
      },
      summary: 'Delete a client',
    },
    attachValidation: true,
  },
};
