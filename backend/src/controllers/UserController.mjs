import UserService from "../service/UserService.mjs";

const UserController = {
    create: async (req, res) => {
        try {
            const newUser = await UserService.Create(req);

            return res.status(201).json(newUser);
        } catch (error) {
            if (error.message.includes('obrigatórios')) {
                return res.status(400).json({ error: error.message });
            } else if (error.message.includes('já existe')) {
                return res.status(409).json({ error: error.message });
            } else {
                return res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    }
}

export default UserController;