// controllers to hanldle the requests and responses
import { ClientService } from '../services/Client';
import type { Controller, registerClientBody, updateClientBody } from '../types';
import { singleClientResponse } from '../schemas/Client';
import { AppError } from '../errors';

export const ClientController: Controller = {
  get: async (request, reply) => {
    const { id } = request.params as { id: string };
    const response = await ClientService.get(id);
    if (!response.success) {
      reply
        .status(response.statusCode as number)
        .send({ error: response.error });
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
    const response = await ClientService.register(
      request.body as registerClientBody,
    );
    if (!response.success)
      throw new AppError(
        response.statusCode as number,
        response.error as string,
      );

    reply.status(201).send({ id: response.client?._id.toString() });
  },
  update: async (request, reply) => {
    const { id } = request.params as { id: string };

    const response = await ClientService.update(
      id,
      request.body as updateClientBody,
    );

    if (!response.success) {
      reply
        .status(response.statusCode as number)
        .send({ error: response.error });
      return;
    }

    const updatedClient = singleClientResponse.parse(response.client);
    reply.status(200).send({ ...updatedClient });
  },
  delete: async (request, reply) => {
    const { id } = request.params as { id: string };
    const response = await ClientService.delete(id);
    if (!response.success) {
      reply
        .status(response.statusCode as number)
        .send({ error: response.error });
      return;
    }

    reply.status(204).send();
  },
};
