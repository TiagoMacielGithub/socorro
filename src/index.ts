import http from 'http';
import app from './config';
import { AppDataSource } from './data-source';

const PORT = 39000;

const server = http.createServer({}, app);

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

    AppDataSource.initialize()
    .then(() => {
        console.log("Banco ok")
    })
    .catch((error) => console.log(error))
    console.log("Servidor ok")
})

