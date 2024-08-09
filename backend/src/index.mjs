
import env from 'dotenv'
env.config()
import express from 'express'
import cors from 'cors'
import router from './routes.js'
import db from './models/index.mjs';

const app = express();

const port = process.env.PORT_API || 3333

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, ()=>{
    console.log('servidor rodando na porta:', port)
});