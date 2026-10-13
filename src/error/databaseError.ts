import { ValidationError } from "express-validator";
import { CustomError } from "./cutomError";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  response = "Database connection error";
  constructor() {
    super("Database connection error");

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.response }];
  }
}
