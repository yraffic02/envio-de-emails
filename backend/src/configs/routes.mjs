import { Router } from 'express';
import AuthRouter from '../routes/AuthRouter.mjs';
import UserRouter from '../routes/UserRouter.mjs';
import TotpAuthRouter from '../routes/TotpAuthRouter.mjs';

const router = Router()

router.use('/auth', AuthRouter);
router.use('/user', UserRouter);
router.use('/totp', TotpAuthRouter);

export default router;