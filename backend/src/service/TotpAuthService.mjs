import * as OTPAuth from 'otpauth';
import Qrcode from 'qrcode';
import crypto from 'crypto';
import AuthService from './AuthService.mjs';
import UserService from './UserService.mjs';
import db from '../models/index.mjs';

const TotpAuthService = {
  checkIfUserHastotp: async (id) => {

    if (!id) {
      throw new Error('O id do usuário não foi fornecido!');
    }
  
    const totp = await db.TotpAuth.findOne({
      where: { UserId: id },
      include: [db.User],
    });

    if (totp) {
      return {
        user: totp.User,
        isRegistered: true,
        secret: totp.secret,
      };
    }

    return false;
  },
  generateTotpSecret: async (id) => {
    const existsUser = await UserService.FindOne({ id });

    if (!existsUser) {
      throw new Error('Usuário não encontrado!');
    }

    const secretHex = crypto.randomBytes(48).toString('hex');
    const secret = OTPAuth.Secret.fromHex(secretHex);

    if (secret) {
      const userTotp = await db.TotpAuth.create({
        name: existsUser.name,
        secret: secret.base32,
        UserId: existsUser.id,
      });

      return userTotp;
    }

    return null;
  },
  generateTotpQrcode: async (id) => {
    const userTotp = await TotpAuthService.generateTotpSecret(id);
    const { user } = await TotpAuthService.checkIfUserHastotp(id);

    if (!userTotp) {
      throw new Error('Token invalido!');
    }

    const totp = new OTPAuth.TOTP({
      issuer: user.firstName,
      label: user.email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: userTotp.secret,
    });

    const uri = totp.toString();

    const qrcode = await Qrcode.toDataURL(uri);

    if(qrcode){
      const query = { id :  user.id};
      const data = { totp : true};

      await UserService.Update(query, data)
      const manualInfo = {
        accountName: user.email,
        secret: userTotp.secret,
      }

      return {
        qrcode,
        manualInfo,
      };
    }
  },
  verifyTotpCode: async ({ otpCode, id }) => {
    if (!otpCode || otpCode.length < 6) {
      throw new Error('O token é invalido!');
    }

    const { user, secret } = await TotpAuthService.checkIfUserHastotp(id);

    if (!user || !secret) {
      throw new Error('Nenhum token totp salvo');
    }

    const totp = new OTPAuth.TOTP({
      issuer: user.name,
      label: user.email,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret,
    });

    const delta = totp.validate({ token: otpCode });

    if (delta !== null && delta >= 0) {

      const token = AuthService.generateToken(user);

      return {
        token,
      };
    }
    return false;
  },
};
export default TotpAuthService;
