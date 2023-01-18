import express, { Router } from 'express';
import { UserController } from '../controllers';

const router: Router = express.Router();

router.get('/', UserController.getList);

export default router;