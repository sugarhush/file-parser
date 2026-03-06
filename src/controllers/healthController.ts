import { type NextFunction, type Request, type Response } from "express";
export const getHealth = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({ status: "OK!" });
  } catch (err) {
    next(err);
  }
};
