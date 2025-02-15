import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes'

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(routes);
app.listen(PORT, ()=>{console.log(`server listen ${PORT}`)});