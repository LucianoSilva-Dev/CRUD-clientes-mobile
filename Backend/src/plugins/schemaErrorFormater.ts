import type { SchemaErrorFormatter } from "fastify/types/schema";

export const schemaErrorFormater: SchemaErrorFormatter = (error, dataVar) => {
  error.map((e) => {
    console.log(e);
  });

  return new Error('Schema Error');
};
