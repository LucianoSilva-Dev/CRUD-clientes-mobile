import z from 'zod';

export const genericError = z.object({
    error: z.string(),
  });