import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import process from 'process';
import UserService from "../service/UserService.mjs";
import TotpAuthService from './TotpAuthService.mjs';

const AuthService = {
    generateToken: (user, expiresIn = process.env.EXPIRESIN) => {
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET, 
            { expiresIn }
        );

        return { token };
    },
    verifyCredentials: async (req) => {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Email e senha são obrigatórios');
        }
        const unscoped = true
        
        const user = await UserService.FindOne({ email }, unscoped);

        if (!user) {
            throw new Error('Email ou senha inválidos!');
        }

        const passwordMatch = await bcrypt.compare(password.toString(), user.password);

        if (!passwordMatch) {
            throw new Error('Email ou senha inválidos!');
        }

        return user;
    },
    login: async (req) => {
        const user = await AuthService.verifyCredentials(req);

        const totp = await TotpAuthService.checkIfUserHastotp(user.id)
        
        if(user.totp && totp){
            return { totp: {
                idUser: totp.user.id
            } }   
        }

        const token = await AuthService.generateToken(user);
        
        return token;
    },
    verifyToken: (token) => {
        try {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    
          return decodedToken;
        } catch (error) {
          if (error instanceof jwt.TokenExpiredError) {
            throw new Error('Token expirado');
          }
    
          throw new Error('Token inválido');
        }
      }
};

export default AuthService;
