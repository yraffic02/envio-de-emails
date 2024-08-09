import { Router } from 'express';
import AuthController from '../controllers/AuthController.mjs';

const AuthRouter = Router();

AuthRouter.get('/register', AuthController.getAll);
AuthRouter.get('/login', AuthController.getAll);

export default AuthRouter;