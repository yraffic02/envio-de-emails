import db from './models/index.mjs';

async function connectDB() {
    try {
        await db.authenticate();
        console.log('db conectado');
    } catch (error) {
        console.error('erro na conexão db:', error);
    }
}

module.exports = connectDB;