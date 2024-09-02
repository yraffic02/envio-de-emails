import db from "../models/index.mjs";
import AuthService from "../service/AuthService.mjs";

export default async function AuthMiddleware(req, res, next) {
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(' ')[1];
      
        if (!authorization || !token) {
          return res.status(401).json({
            message: 'Token não encontrado',
          });
        }
  
        const decodedToken = AuthService.verifyToken(token);
  
        const user = await  db.sequelize.models.User.findByPk(decodedToken.id);
  
        req.user = {
            id: user.id,
            email: user.email,
            totp: user.totp
        };
  
        return next();
    } catch (error) {
        if (error.message.includes('Erro ao buscar registro')) {
            return res.status(401).json({ error: error.message });
        } else if (error.message.includes('Token expirado') || error.message.includes('Token inválido')) {
            return res.status(498).json({ error: error.message });
        } else {
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
  }