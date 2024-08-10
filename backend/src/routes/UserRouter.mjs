import { Router } from 'express';
import UserController from '../controllers/UserController.mjs';

const UserRouter = Router();

UserRouter.get('/register', UserController.create);

export default UserRouter;