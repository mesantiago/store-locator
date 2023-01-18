import express, { Express } from 'express';
import dotenv from 'dotenv';
import { setupRouters, setupUnauthenticatedRouters } from './routers';
import { mongo } from './connectors';

// Load environment Variables
dotenv.config();
const port: string = process.env.PORT!;
const mongoUrl: string = process.env.MONGOURL!;

// Create express application
const app: Express = express();

// Connect to database
mongo.init(mongoUrl);

// Initialize unauthenticated routers
setupUnauthenticatedRouters(app);

// TODO: setup JWT token here

// Initialize authenticated routers
setupRouters(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});