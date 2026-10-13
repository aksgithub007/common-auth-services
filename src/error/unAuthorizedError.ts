import { CustomError } from "./cutomError";

export class UnAuthorizedError extends CustomError {
  statusCode = 401;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeError(): { message: string; field?: string }[] {
    return [{ message: this.message }];
  }
}
