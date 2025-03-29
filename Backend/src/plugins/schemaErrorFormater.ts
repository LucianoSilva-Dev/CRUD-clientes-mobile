import type { SchemaErrorFormatter } from "fastify/types/schema";
import { SchemaValidationError, ResponseValidationError } from "../errors";
import { errorCodes } from "fastify";
import { ResponseSerializationError } from "fastify-type-provider-zod";

export const schemaErrorFormater: SchemaErrorFormatter = (error: unknown, dataVar) => {
  if (Array.isArray(error)) {
    return new SchemaValidationError(error);
  }
  if (error instanceof ResponseSerializationError) {
    return new ResponseValidationError(error);
  }
  return new Error('Unknown Schema Formatter Error');
};
