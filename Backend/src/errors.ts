import type { ZodError } from "zod";

export type ValidationErrorResponse = {
  errors: string[];
};

export type GenericErrorResponse = {
  error: string;
};

class CustomError extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
    if ("captureStackTrace" in Error) {
        Error.captureStackTrace(this, CustomError);
    }else {
        this.stack = 'No stack trace available';
    }
  }
}

export class  InputValidationError extends CustomError {
  constructor(public statusCode: number, public error: ZodError) {
    super('Input Validation Error', statusCode);
  }
}

export class ResponseValidationError extends CustomError {
  constructor() {
    super('Response Validation Error', 500);
  }
}

export class AppError extends CustomError {
  constructor(public statusCode: number, public error: string) {
    super('App Error', statusCode);
  }
}
