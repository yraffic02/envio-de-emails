import { Router } from 'express';
import TotpAuthController from '../controllers/TotpAuthController.mjs';
import AuthMiddleware from '../middlewares/AuthMiddleware.mjs';

const TotpAuthRouter = Router();

TotpAuthRouter.post('/verifySecret', TotpAuthController.verifyTotpCode);

TotpAuthRouter.all('*', AuthMiddleware)

TotpAuthRouter.post('/generateQrCode', TotpAuthController.generateTotpQrcode);
TotpAuthRouter.get('/verifyIfUserHasTotp', TotpAuthController.verifyIfUserHasTotp)
TotpAuthRouter.get('/toggleUserTotp', TotpAuthController.toggleUserTotp)

export default TotpAuthRouter;