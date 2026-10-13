import { CustomError } from "./cutomError";

export class NotFound extends CustomError {
  statusCode = 404;
  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFound.prototype);
  }
  serializeError() {
    return [{ message: this.message }];
  }
}
