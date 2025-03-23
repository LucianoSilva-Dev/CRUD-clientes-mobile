import type { FastifyReply } from 'fastify';
import { ClientModel } from '../models/Client';
// biome-ignore lint/style/useImportType: inevitable
import z from 'zod';
import type {
  updateBodyValidation,
  registerBodyValidation,
} from '../validations/Client';

type updateClientBody = z.infer<typeof updateBodyValidation>;
type registerClientBody = z.infer<typeof registerBodyValidation>;

export const ClientService = {
  get: async (clientId: string) => {
    const client = await ClientModel.findById(clientId);
    if (!client) {
      return { success: false, statusCode: 404, error: 'Client not found' };
    }

    return { success: true, client };
  },

  get_all: async () => {
    const clients = await ClientModel.find();
    return { success: true, clients };
  },

  update: async (clientId: string, client: updateClientBody) => {
    const { name, email, phone, cpf } = client;

    const emailExists = await ClientModel.findOne({ email });
    if (emailExists) {
      return { success: false, statusCode:409, error: 'Email already exists.' };
    }

    const cpfExists = await ClientModel.findOne({ cpf });
    if (cpfExists) {
      return { success: false, statusCode:409, error: 'CPF already exists.' };
    }

    const updatedClient = await ClientModel.findByIdAndUpdate(
      clientId,
      { name, email, phone, cpf },
      { new: true },
    );
    if (!updatedClient) {
      return { success: false, statusCode: 404, error: 'Client not found' };
    }

    return { success: true, client: updatedClient };
  },

  register: async (client: registerClientBody) => {
    const { name, email, phone, cpf } = client;

    const clientExists = await ClientModel.findOne({ email });
    if (clientExists) {
      return { success: false, statusCode: 409, error: 'Client already exists.' };
    }

    const newClient = new ClientModel({ name, email, phone, cpf });
    await newClient.save();

    return { success: true, client: newClient };
  },

  delete: async (clientId: string) => {
    const deletedClient = await ClientModel.findByIdAndDelete(clientId);
    if (!deletedClient) {
      return { success: false, statusCode: 404, error: 'Client not found.' };
    }

    return { success: true, message: 'Client deleted successfully.' };
  },
};
