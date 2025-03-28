import type { FastifyInstance } from 'fastify';
import { isResponseSerializationError} from 'fastify-type-provider-zod';
import { AppError, InputValidationError } from '../errors';
import type { ZodError } from 'zod';

const mapMessageFromZodErrorIssues = (error: ZodError) =>{
  return error.issues.map((issue) => issue.message);
}

export const appErrorHandler: FastifyInstance['errorHandler'] = (
  error: unknown,
  request,
  reply,
) => {
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({ error: error.error }); 
  }
  if (error instanceof InputValidationError) {
    return reply.status(error.statusCode).send({ errors: mapMessageFromZodErrorIssues(error.error) }); 
  }
  if (isResponseSerializationError(error)) {
    return reply.status(500).send({ error: error.message });
  }
  console.log('Error generico capturado');
  reply.status(500).send({ error: 'Internal Server Error' });
};
