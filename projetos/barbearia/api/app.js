import express from 'express';
import { testarConexao } from './db.js';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import documentacao from './config/swagger.js';

import rotasUsuarios from './src/routes/RotasUsuarios.js';
import rotasServicos from './src/routes/RotasServicos.js';
import rotasAgendamentos from './src/routes/RotasAgendamentos.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao));

app.get('/', async (req, res) => {
    await testarConexao();
    res.redirect('/swagger');
});

// Registrando rotas
app.use(rotasUsuarios);
app.use(rotasServicos);
app.use(rotasAgendamentos);

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});
