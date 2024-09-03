import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    dialect: process.env.DB_DIALECT_DEV || 'mysql',
    logging: true,
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    port: process.env.POSTGRES_PORT,
    host: process.env.POSTGRES_HOST,
    dialect: process.env.DB_DIALECT_PROD || 'postgres',
    logging: true,
  },
};
console.log(env);

export default config[env];