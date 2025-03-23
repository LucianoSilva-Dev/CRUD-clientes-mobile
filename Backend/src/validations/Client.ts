import z from 'zod';

export const registerBodyValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  cpf: z.string(),
});

export const updateBodyValidation = z
  .object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    cpf: z.string().optional(),
  })
  .strict()
  .refine((data) => Object.keys(data).some((key) => key !== undefined));
