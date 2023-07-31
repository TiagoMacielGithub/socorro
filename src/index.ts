import { Request, Response, Router } from "express";
import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import router from "./routes/user.router";


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Teste ok :)');
});

app.get('/nome', (req: Request, res: Response) => {
    res.send('Projeto: {insira um nome}');
});

app.use('/users', router)

app.listen(38000, () => {
   console.log("Iniciando");
   AppDataSource.initialize().then(() => console.log("Banco iniciado"))
});

// "strictPropertyInitialization": false && "experimentalDecorators": true, no tsconfig
