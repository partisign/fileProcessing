import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req: Request, res: Response)=>{res.send('OK')})
app.listen(PORT, ()=>{console.log(`server listen ${PORT}`)});