import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import config from '../configs/database.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
/* const env = process.env.NODE_ENV || 'development'; */

const db = {};
const sequelize = new Sequelize(config);

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-4) === '.mjs' &&
      file.indexOf('.test.mjs') === -1
    );
});

const modelImports = modelFiles.map(async (file) => {
  const { default: model } = await import(path.join(__dirname, file));
  const modelInstance = model(sequelize, Sequelize.DataTypes);
  db[modelInstance.name] = modelInstance;
  console.log(`Model ${modelInstance.name} imported and initialized.`);
});

await Promise.all(modelImports);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
