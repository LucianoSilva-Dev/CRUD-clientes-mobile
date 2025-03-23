import { Schema, model } from 'mongoose';

const ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const ClientModel = model('Client', ClientSchema);
