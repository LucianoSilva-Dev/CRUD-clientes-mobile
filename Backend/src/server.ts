import fastify from 'fastify';
import { fastifyCors } from '@fastify/cors';
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';


const app = fastify().withTypeProvider<ZodTypeProvider>();

// setup zod as the default validator (input)
app.setValidatorCompiler(validatorCompiler);
// setup zod as the default seralizer (output)
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: '*',
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Backend for CMS (Client Management System)',
      version: '1.0.0',
    },
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

const port = 3000;

app.listen({ port }).then(() => {
  console.log('app listening at http://localhost:3000');
});

app.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});
