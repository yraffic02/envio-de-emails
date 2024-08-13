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
            throw new Error('Email and password are required');
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
        const userAgent = req.headers['user-agent'] || 'unknown';
        console.log(`Login attempt by ${userAgent}`);

        const user = await AuthService.verifyCredentials(req);

        const totp = await TotpAuthService.checkIfUserHastotp(user.id)

        if(!totp){
            const token = await AuthService.generateToken(user);
            return token;
        }

        return { totp }
    }
};

export default AuthService;
