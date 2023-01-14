import { Express, Request, Response } from 'express';
import stores from './stores';
import users from './users';

const setupUnauthenticatedRouters = (router: Express): void => {
  router.get("/", (req: Request, res: Response) => {
    res.send({
      message: "App is running",
      timestamp: new Date()
    });
  });
};

const setupRouters = (router: Express): void => {
  router.use('/stores', stores);
  router.use('/users', users);
};

export {
  setupRouters,
  setupUnauthenticatedRouters
};