import { jsonSchemaTransform } from "fastify-type-provider-zod";
import type { FastifyDynamicSwaggerOptions } from "@fastify/swagger";
import type { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const fastifySwaggerConfig: FastifyDynamicSwaggerOptions = {
  openapi: {
    info: {
      title: 'Backend for CMS (Client Management System)',
      version: '1.0.0',
    },
    tags: [
      { name: 'Client', description: 'Client related end-points' },
    ]
  },
  transform: jsonSchemaTransform
}

export const fastifySwaggerUiConfig: FastifySwaggerUiOptions = {
  routePrefix: '/docs',
}