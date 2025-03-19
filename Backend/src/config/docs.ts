import { jsonSchemaTransform } from "fastify-type-provider-zod";
import type { FastifyDynamicSwaggerOptions } from "@fastify/swagger";
import type { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const fastifySwaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    info: {
      title: 'Backend for CMS (Client Management System)',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform
}

export const fastifySwaggerUiConfig: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
}