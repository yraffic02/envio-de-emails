import db from '../models/index.mjs'
import { CrudHelper } from '../utils/crudHelper.mjs';

const UserService = {
   Create: async (req,_, crudHelper) =>{
     try {
        const { name, email, password, username} = req.body;

        if(!name || !email || !password || !username){
            throw new Error('Todos os dados são obrigatórios!')
        }

        return await crudHelper({ 
            name, 
            email, 
            password, 
            username
        })
     } catch (error) {
        if(error.message.includes('Validation error')){
            throw new Error('Usuário já existe!')
        }
        throw new Error(error)
     }
   }
}

export default CrudHelper({
    dbInstance: db.sequelize.models.Users,
    service: UserService,
});