import Ranking from "../models/Ranking.js";

let listaRanking = [
    new Ranking(1, "Player_One", 150),
    new Ranking(2, "MasterChief", 450),
    new Ranking(3, "NoobMaster69", 50)
];

const Rankingcontroller = {
    listarRanking: (req, res) => {
        res.render("ranking", { ranking: listaRanking, error: null });
    },

    criarRanking: (req, res) => {
        try {
            const { nome, pontuacao } = req.body;
            const novoJogador = new Ranking(
                listaRanking.length + 1, 
                nome, 
                pontuacao
            );

            listaRanking.push(novoJogador);
            res.redirect("/ranking");
        } catch (e) {
            res.status(400).render('ranking', { 
                ranking: listaRanking, 
                error: e.message 
            });
        }
    },

    atualizarNivel: (req, res) => {
        const { id } = req.body;
        const jogador = listaRanking.find(j => j.id === Number(id));

        if (jogador) {
            jogador.ganhodepontos(); // Aumenta pontos e atualiza nível automaticamente
        }

        res.redirect("/ranking");
    }
}

export default Rankingcontroller;