import { Express, Request, Response } from 'express';
import storeRouter from './store.router';
import userRouter from './user.router';

const setupUnauthenticatedRouters = (router: Express): void => {
  router.get("/", (req: Request, res: Response) => {
    res.send({
      message: "App is running",
      timestamp: new Date()
    });
  });
};

const setupRouters = (router: Express): void => {
  router.use('/stores', storeRouter);
  router.use('/users', userRouter);
};

export {
  setupRouters,
  setupUnauthenticatedRouters
};