import AuthService from "../service/AuthService.mjs";

const AuthController = {
    login: async (req, res) => {
        try {
            const response = await AuthService.login(req);
            return res.status(200).json(response);
          } catch (error) {
            return res.status(400).json({ message: error.message });
          }
    }
}

export default AuthController;