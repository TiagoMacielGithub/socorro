import { Request, Response, Router } from "express";
import cors from "cors";
import express from "express";
import { AppDataSource } from "../data-source";
import router from "../routes/user.router";
import morgan from 'morgan'
import logger from './logger';


const app = express();
app.use(express.json());
app.use(cors());

app.use(morgan("combined"));

app.get('/', (req: Request, res: Response) => {
    res.send('Teste ok :)');
});

app.get('/nome', (req: Request, res: Response) => {
    logger.info("Testando request name")
    res.send('Projeto: Cont;nue');
});

app.use('/users', router)


export default app;







// "strictPropertyInitialization": false && "experimentalDecorators": true, no tsconfig