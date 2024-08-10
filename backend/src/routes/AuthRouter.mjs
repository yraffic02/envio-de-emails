import { Router } from 'express';
import AuthController from '../controllers/AuthController.mjs';

const AuthRouter = Router();

AuthRouter.post('/login', AuthController.login);

export default AuthRouter;