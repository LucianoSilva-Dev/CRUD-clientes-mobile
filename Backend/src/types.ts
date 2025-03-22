import type {
  FastifyBaseLogger,
  FastifyInstance,
  FastifySchema,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteGenericInterface,
  RouteShorthandOptions,
} from 'fastify';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';

type RouteSchema = RouteShorthandOptions<
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
