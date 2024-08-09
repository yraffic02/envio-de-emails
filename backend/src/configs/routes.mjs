import { Router } from 'express';
import AuthRouter from '../routes/AuthRouter.mjs';

const router = Router()

router.use('/auth', AuthRouter);

export default router;