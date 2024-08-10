import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import process from 'process';
import UserService from "../service/UserService.mjs";

const AuthService = {
    generateToken: (user, expiresIn = process.env.EXPIRESIN) => {
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET, 
            { expiresIn }
        );

        return { token, user };
    },
    verifyCredentials: async (req) => {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        const unscoped = true
        
        const user = await UserService.FindOne({ email }, unscoped);

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(password.toString(), user.password);

        if (!passwordMatch) {
            throw new Error('Invalid credentials');
        }

        return user;
    },
    login: async (req) => {
        const userAgent = req.headers['user-agent'] || 'unknown';

        const user = await AuthService.verifyCredentials(req);

        const { token } = await AuthService.generateToken(user);

        // You can also store the userAgent or log it if needed
        console.log(`Login attempt by ${userAgent}`);

        return { token, user };
    }
};

export default AuthService;
