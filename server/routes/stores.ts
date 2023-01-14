import express, { Router } from 'express';
import { Store } from '../controllers';

const router: Router = express.Router();

router.get('/', Store.getList);

export default router;
