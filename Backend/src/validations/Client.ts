import z from 'zod';

export const registerBodyValidation = z.object({
  name: z.string({ message: 'o campo nome precisa ser uma string.' }),
  email: z
    .string({ message: 'o campo email precisa ser uma string' })
    .email('email inválido'),
  phone: z.string({ message: 'o campo telefone precisa ser uma string' }),
  cpf: z.string({ message: 'o campo cpf precisa ser uma string' }),
});

export const updateBodyValidation = z
  .object({
    name: z
      .string({ message: 'o campo nome precisa ser uma string' })
      .optional(),
    email: z
      .string({ message: 'o campo email precisa ser uma string' })
      .email()
      .optional(),
    phone: z
      .string({ message: 'o campo telefone precisa ser uma string' })
      .optional(),
    cpf: z.string({ message: 'o campo cpf precisa ser uma string' }).optional(),
  })
  .strict()
  .refine(
    (data) => Object.keys(data).some((key) => key !== undefined),
    'preencha ao menos um campo para atualizar os dados',
  );
