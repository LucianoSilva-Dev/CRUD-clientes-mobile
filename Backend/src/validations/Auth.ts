import z from 'zod';

export const getTokenBodyValidation = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const postRegisterBodyValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,24}$/),
});