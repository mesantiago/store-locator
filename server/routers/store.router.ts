import express, { Router } from 'express';
import { StoreController } from '../controllers';

const router: Router = express.Router();

router.get('/', StoreController.getList);

export default router;
