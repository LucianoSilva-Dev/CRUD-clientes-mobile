// controllers to hanldle the requests and responses
import { ClientService } from '../services/Client';
import type { Controller } from '../types';
import {
  registerBodyValidation,
  updateBodyValidation,
} from '../validations/Client';
import { idValidation } from '../validations/Commom';
import { singleClientResponse } from '../schemas/Client'; 
import { AppError, InputValidationError } from '../errors';

export const ClientController: Controller = {
  get: async (request, reply) => {
    const result = idValidation.parse(request.params);
    
    const response = await ClientService.get(result.id);
    if (!response.success) {
      reply.status(response.statusCode as number).send({ error: response.error });
      return;
    }

    const client = singleClientResponse.parse(response.client);
    reply.status(200).send({ ...client });

  },
  get_all: async (request, reply) => {
    const { clients } = await ClientService.get_all();
    reply.status(200).send(clients);
  },
  register: async (request, reply) => {
    const result = registerBodyValidation.safeParse(request.body);

    if  (!result.success) throw new InputValidationError(400, result.error);

    const response = await ClientService.register(result.data);
    if (!response.success) throw new AppError(response.statusCode as number, response.error as string);

    reply.status(201).send({ id: response.client?._id.toString() });
  },
  update: async (request, reply) => {
    const result = updateBodyValidation.safeParse(request.body);
    reply.status(200).send({ dataSent: result });
  },
  delete: async (request, reply) => {
    const result = idValidation.safeParse(request.params);
    reply.status(200).send({ dataSent: result });
  },
};
