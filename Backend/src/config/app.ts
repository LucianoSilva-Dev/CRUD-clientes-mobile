import type { FastifyServerOptions } from "fastify";
import { schemaErrorFormater } from "../plugins/schemaErrorFormater";


export const appConfig: FastifyServerOptions = {
    //logger: true,
    schemaErrorFormatter: schemaErrorFormater
};
