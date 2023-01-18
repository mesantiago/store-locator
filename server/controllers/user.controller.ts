import { Request, Response, NextFunction } from "express";

export const getList = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send([]);
  } catch (err) {
    next(err);
  }
};