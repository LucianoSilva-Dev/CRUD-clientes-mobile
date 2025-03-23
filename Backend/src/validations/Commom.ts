import z from 'zod';
import mongoose from 'mongoose';

export const idValidation = z.object({
  id: z.string().refine((id) => mongoose.Types.ObjectId.isValid(id)),
});

export const idAsStringValidation = z
  .string()
  .refine((id) => mongoose.Types.ObjectId.isValid(id));
