import dotenv from 'dotenv';

dotenv.config();

export default {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  logging: false,
};
