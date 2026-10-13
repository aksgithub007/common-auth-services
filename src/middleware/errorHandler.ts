import { Request, Response, NextFunction } from "express";

import { CustomError } from "../error/cutomError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ error: err.serializeError() });
  }
  res.status(500).send({ error: [{ message: "Internal Server Error" }] });
};
