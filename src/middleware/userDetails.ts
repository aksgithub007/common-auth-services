import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UnAuthorizedError } from "../error/unAuthorizedError";

interface UserPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const userDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.session?.token;
    if (!req.session?.token) {
      return next();
    }
    const payload = (await jwt.verify(
      token!,
      process.env.JWT_SECRET!,
    )) as UserPayload;
    req.currentUser = payload;
  } catch (error) {
    // console.log(error, "error in userDetails middleware");
  }
  next();
};
