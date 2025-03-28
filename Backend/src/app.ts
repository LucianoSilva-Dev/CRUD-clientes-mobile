import fastify, { type FastifyInstance } from 'fastify';
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod';
import type { ZodSerializerCompilerOptions, ZodTypeProvider } from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { corsConfig } from './config/cors';
import { fastifySwaggerConfig, fastifySwaggerUiConfig } from './config/docs';
import fastifyCors from '@fastify/cors';

import { appErrorHandler } from './plugins/appErrorHandler';

import { ClientRoutes } from './routes/Client';
import { AuthRoutes } from './routes/Auth';
import { appConfig } from './config/app';

class App {
  readonly app: FastifyInstance;

  constructor() {
    this.app = fastify(appConfig).withTypeProvider<ZodTypeProvider>();
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
    this.app.setErrorHandler(appErrorHandler);
    // this.app.addHook('onError', (err) => {
    //   console.log('Error hook: ', err);
    //   if (err) throw err;
    // });
  }

  private routes() {
    this.app.register(ClientRoutes, { prefix: '/clients', });
    this.app.register(AuthRoutes, { prefix: '/auth', });
  }
}

export default new App().app;
