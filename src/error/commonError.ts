import { CustomError } from "./cutomError";

export class CommonError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, CommonError.prototype);
  }
  serializeError() {
    return [{ message: this.message }];
  }
}
