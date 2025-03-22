// zod schemas for validation and response of the routes
import type { EntitySchema } from '../types';
import mongoose from 'mongoose';
import z from 'zod';

const genericError = z.object({
  error: z.string(),
});

const singleClientResponse = z.object({
  _id: z.string().refine((id) => mongoose.Types.ObjectId.isValid(id)),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const ClientSchema: EntitySchema = {
  get: {
    schema: {
      response: {
        200: singleClientResponse,
        400: genericError,
      },
      summary: 'Get a single client',
    },
  },
  get_all: {
    schema: {
      response: {
        200: singleClientResponse.array(),
        400: genericError,
      },
      summary: 'Get all clients',
    },
  },
  register: {
    schema: {
      response: {
        201: z.null(),
        400: genericError,
      },
      summary: 'Register a client',
    },
  },
  update: {
    schema: {
      response: {
        200: singleClientResponse,
        400: genericError,
      },
      summary: "Update a client's info",
    },
  },
  delete: {
    schema: {
      response: {
        204: z.null(),
        400: genericError,
      },
      summary: 'Delete a client',
    },
  },
};
