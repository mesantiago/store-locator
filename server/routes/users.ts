import express, { Router } from 'express';
import { User } from '../controllers';

const router: Router = express.Router();

router.get('/', User.getList);

export default router;