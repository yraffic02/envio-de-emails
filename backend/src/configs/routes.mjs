import { Router } from 'express';
import AuthRouter from '../routes/AuthRouter.mjs';
import UserRouter from '../routes/UserRouter.mjs';

const router = Router()

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

export default router;