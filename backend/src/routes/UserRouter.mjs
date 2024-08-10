import { Router } from 'express';
import UserController from '../controllers/UserController.mjs';

const UserRouter = Router();

UserRouter.post('/register', UserController.create);

export default UserRouter;