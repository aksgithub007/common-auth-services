import { ValidationError } from "express-validator";
import { CustomError } from "./cutomError";

export class FieldValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super("Invalid Value");

    Object.setPrototypeOf(this, FieldValidationError.prototype);
  }
  serializeError() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error?.type === "field" ? error.path : undefined,
    }));
  }
}
