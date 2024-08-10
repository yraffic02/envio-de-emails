import db from '../models/index.mjs'

export class CrudHelper {

    constructor(model) {
      this.model = db[model];
    }
  
    async findOne(query) {
        return await this.model.findOne({ where: query });
    }
  
    async findAll(query = {}) {
      try {
        return await this.model.findAll({ where: query });
      } catch (error) {
        throw new Error(`Erro ao buscar todos os registros: ${error.message}`);
      }
    }
  
    async create(data) {
      try {
        return await this.model.create(data);
      } catch (error) {
        throw new Error(`Erro ao criar o registro: ${error.message}`);
      }
    }
  
    async update(query, data) {
      try {
        const [updated] = await this.model.update(data, { where: query });
        if (!updated) {
          throw new Error('Registro não encontrado ou dados não alterados');
        }
        return await this.findOne(query);
      } catch (error) {
        throw new Error(`Erro ao atualizar o registro: ${error.message}`);
      }
    }
  
    async delete(query) {
      try {
        const deleted = await this.model.destroy({ where: query });
        if (!deleted) {
          throw new Error('Registro não encontrado');
        }
        return deleted;
      } catch (error) {
        throw new Error(`Erro ao deletar o registro: ${error.message}`);
      }
    }
  }
  