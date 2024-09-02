import TotpAuthService from "../service/TotpAuthService.mjs";
import UserService from "../service/UserService.mjs";

const TotpController = {
  generateTotpQrcode: async (req, res) => {
    const { user } = req;
    
    const qrcode = await TotpAuthService.generateTotpQrcode(user.id);

    return res.status(200).json(qrcode);
  },
  verifyTotpCode: async (req, res) => {
    try {
      const { otpCode, id } = req.body;

      const result = await TotpAuthService.verifyTotpCode({ otpCode, id });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  verifyIfUserHasTotp: async (req, res) =>{
    try {
        const { user } = req;

        const totp = await TotpAuthService.checkIfUserHastotp(user.id)

        if(totp.isRegistered){
          return res.status(200).json({totp: user.totp, isRegistered: totp.isRegistered })
        }

        return res.status(200).json({totp: false, isRegistered: false})
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  },
  toggleUserTotp: async (req, res)=> {
    try {
      const { user } = req;
      const query = { id :  user.id};
      const data = { totp : !user.totp};

      await UserService.Update(query, data)
     
      const userUpdate = await UserService.FindOne(query)

      return res.status(200).json(userUpdate)
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
};

export default TotpController;
