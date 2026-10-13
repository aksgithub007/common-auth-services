import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { FieldValidationError } from "../error/fieldValidationError";
export const validationError = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    throw new FieldValidationError(error.array());
  }
  next();
};
