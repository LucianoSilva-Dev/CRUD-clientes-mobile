import { Schema, model } from 'mongoose';

const ClientSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  phone: { type: String, required: true },
  city: { type: String, required: true },
  cpf: {type: String, required: true},
});

export const ClientModel = model('Client', ClientSchema);
