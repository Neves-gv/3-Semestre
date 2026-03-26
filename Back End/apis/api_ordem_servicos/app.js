import express from 'express';
import { testarConexao } from './db.js';
import rotasUsuarios from './src/routes/rotasUsuarios.js';
import rotasDepartamentos from './src/routes/rotasDepartamentos.js';
import rotasOrdemservicos from './src/routes/rotasOrdemservicos.js';

// Usando Swagger
import swaggerUI from 'swagger-ui-express';
import documentacao from './config/swagger.js';
import cors from 'cors';

const app = express();
app.use(express.json());
// Rota da documentação
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao));
app.use(cors())

// Rota inicial
app.get('/', async (req, res) => {
    try {
        await testarConexao();
        return res.redirect('/swagger');
    } catch (erro) {
        return res.status(500).json({ erro: 'Erro ao conectar com o banco de dados' });
    }
});

// Rotas da API
app.use('/api', rotasUsuarios);
app.use('/api', rotasDepartamentos);
app.use('/api', rotasOrdemservicos)

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});