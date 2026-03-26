import express from 'express';
import { testarConexao } from './db.js';
import rotasUsuarios from './src/routes/RotasUsuarios.js'
// import rotasProdutos from './src/routes/RostaProdutos.js'

// Usando Swagger
import swaggerUI from 'swagger-ui-express';
import documentacao from './config/swagger.js';
import cors from 'cors';

const app = express();
app.use(express.json());

// Rota da documentação
// app.use('/swagger', swaggerUI.serve, swaggerUI.setup(documentacao));
// app.use(cors())
app.get('/swagger', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>API Ordens de Serviço</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
      </head>
      <body>
        <div id="swagger-ui"></div>

        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
        <script>
          SwaggerUIBundle({
            spec: ${JSON.stringify(documentacao)},
            dom_id: '#swagger-ui'
          });
        </script>
      </body>
    </html>
  `);
});

// Rota inicial
// app.get('/', async (req, res) => {
//     try {
//         await testarConexao();
//         return res.redirect('/swagger');
//     } catch (erro) {
//         return res.status(500).json({ erro: 'Erro ao conectar com o banco de dados' });
//     }
// });
app.get('/', async (req, res) => {
    try {
        await testarConexao();

        // res.json("API Funcionando");
        return res.redirect('/swagger');
    } catch (error) {
        console.error('Erro ao testar conexão:', error);
        return res.status(500).json({ erro: 'Erro ao conectar com o servidor' });
    }
});
// Rotas da API
app.use('/api', rotasUsuarios);
// app.use('/api', rotasProdutos);

const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em: http://localhost:${porta}`);
});