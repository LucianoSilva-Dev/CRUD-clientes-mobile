import type {
  FastifyBaseLogger,
  FastifyReply,
  FastifyRequest,
  FastifySchema,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteGenericInterface,
  RouteShorthandOptions,
} from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import type z from 'zod';
import type {
  registerBodyValidation,
  updateBodyValidation,
} from './validations/Client';
import type {
  getTokenAuthBodyValidation,
  postRegisterAuthBodyValidation,
} from './validations/Auth';

export type RouteSchema = RouteShorthandOptions<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  RouteGenericInterface,
  unknown,
  FastifySchema,
  ZodTypeProvider,
  FastifyBaseLogger
>;

export type EntitySchema = {
  [key: string]: RouteSchema;
};

export type ControllerMethod = (
  request: FastifyRequest,
  reply: FastifyReply,
) => Promise<void>;

export type Controller = Record<string, ControllerMethod>;

export type updateClientBody = z.infer<typeof updateBodyValidation>;
export type registerClientBody = z.infer<typeof registerBodyValidation>;

export type getTokenAuthBody = z.infer<typeof getTokenAuthBodyValidation>;
export type registerAuthBody = z.infer<typeof postRegisterAuthBodyValidation>;
