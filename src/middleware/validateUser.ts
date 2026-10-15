import { Request, Response, NextFunction } from "express";
import { UnAuthorizedError } from "../error/unAuthorizedError";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req?.currentUser) {
    throw new UnAuthorizedError("User is not authorize");
  }
  next();
};
