
import env from 'dotenv'
env.config()
import express from 'express'
import cors from 'cors'
import process from 'process';
import router from './configs/routes.mjs';

const app = express();

const port = process.env.PORT_API || 3333

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port)
});