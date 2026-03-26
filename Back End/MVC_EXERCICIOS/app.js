import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import rotasRanking from './routes/rotasRanking.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use(rotasRanking);

app.get('/', (req, res) => {
    res.redirect('/ranking');
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});