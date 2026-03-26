import express from 'express';

const app = express();

app.use('/dogs', express.static('public'))
// CRIAÇÃO DO PRIMEIRO END POINT
app.get('/', async (req, res) => {
    res.status(200).json("API Funcionando");
});

// CRIANDO NOVO ENDPOINT PARA CONSUMIR DADOS DA API VIACEP
app.get('/cep/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
   
    // METODO FETCH É O MENSAGEIRO QUE VAI ATÉ A OUTRA API E TRAZ A RESPOSTA
    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`);
    const dados = await resposta.json();
   

    const cidade = dados.localidade;
    const estado = dados.uf;


    res.json({cidade, estado});
});

app.get('/starwars/personagem/:id', async (req, res) => {
    const {id} = req.params;

    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    const dados = await resposta.json();

    const resultado = {
        nome: dados.name,
        altura: dados.height,
        massa: dados.mass,
        cor_olhos: dados.eye_color
    }

    res.status(201).json(resultado);
});

app.get('/dog/:id', async(req, res) => {
    const {id} = req.params;
    const url = `https://http.dog/${id}.json`

    res.json({url});

})

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando http://localhost:${porta}`);
})
