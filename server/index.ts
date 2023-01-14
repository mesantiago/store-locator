import express, { Express } from 'express';
import dotenv from 'dotenv';
import { setupRouters, setupUnauthenticatedRouters } from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

setupUnauthenticatedRouters(app);

// TODO: setup JWT token here
setupRouters(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});