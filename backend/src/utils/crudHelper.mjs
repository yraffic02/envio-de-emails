export function CrudHelper({ 
  dbInstance,
  service
}) {
  if(!service){
    throw new Error('Db instance é obrigatorio');
  }

  if(!service){
    throw new Error('Objeto service é obrigatorio');
  }
  
  const functions = {
    FindOne: async(query) => {
      try {
        return await dbInstance.findOne({ where: query });
      } catch (error) {
        throw new Error(`Erro ao buscar registro: ${error.message}`);
      }
    },
    FindAll: async (query = {}) => {
      try {
        return await dbInstance.findAll({ where: query });
      } catch (error) {
        throw new Error(`Erro ao buscar todos os registros: ${error.message}`);
      }
    },
    Create: async (data) => {
      try {
        return await dbInstance.create(data);
      } catch (error) {
        throw new Error(`Erro ao criar o registro: ${error.message}`);
      }
    },
    Update: async (query, data)=>{
      try {
        const [updated] = await dbInstance.update(data, { where: query });
        if (!updated) {
          throw new Error('Registro não encontrado ou dados não alterados');
        }
        return await this.findOne(query);
      } catch (error) {
        throw new Error(`Erro ao atualizar o registro: ${error.message}`);
      }
    },
    Delete: async (query) => {
      try {
        const deleted = await dbInstance.destroy({ where: query });
        if (!deleted) {
          throw new Error('Registro não encontrado');
        }
        return deleted;
      } catch (error) {
        throw new Error(`Erro ao deletar o registro: ${error.message}`);
      }
    }
  }
  
  const nameFunctions = [ 'FindOne', 'FindAll', 'Create', 'Update', 'Delete'];
  
  const newService = { ...service } 

  Object.keys(functions).forEach((key) => {
    if (nameFunctions.includes(key)) {
      const crudHelper = functions[key];

      if (newService[key]) {
        newService[key] = (req, res) => service[key](req, res, crudHelper);
      } else {
        newService[key] = crudHelper;
      }
    }
  });
  
  return newService;
}
  