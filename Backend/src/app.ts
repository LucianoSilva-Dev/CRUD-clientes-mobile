import fastify, { type FastifyInstance } from 'fastify';
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { routes } from './routes';
import { corsConfig } from './config/cors';
import { fastifySwaggerConfig, fastifySwaggerUiConfig } from './config/docs';
import fastifyCors from '@fastify/cors';

class App {
  readonly app: FastifyInstance;

  constructor() {
    this.app = fastify().withTypeProvider<ZodTypeProvider>();
    this.compilers();
    this.plugins();
    this.routes();
  }

  private compilers() {
    this.app.setValidatorCompiler(validatorCompiler);
    this.app.setSerializerCompiler(serializerCompiler);
  }

  private plugins() {
    this.app.register(fastifyCors, corsConfig);
    this.app.register(fastifySwagger, fastifySwaggerConfig);
    this.app.register(fastifySwaggerUi, fastifySwaggerUiConfig);
  }

  private routes() {
    this.app.register(routes);
  }
}

export default new App().app;
