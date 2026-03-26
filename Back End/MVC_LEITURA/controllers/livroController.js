import Livro from "../models/Livro.js";

// Vetor de objetos de livros
let listaLivros = [
    new Livro(1, "O Preço de ser Campeão", "Ryanzin", 200),
    new Livro(2, "O Poder do Hábito", "Charles Duhigg", 400),
    new Livro(3, "A Arte da Guerra", "Sun Tzu", 150)
]

const livroController = {
    listarLivros: (req, res) => {
        res.render("livros.ejs", { livros: listaLivros });
    },
    criarLivro: (req, res) => {
        try {
            const novoLivro = new Livro(
                listaLivros.length + 1,
                req.body.titulo,
                req.body.autor,
                Number(req.body.paginas)
            );
            listaLivros.push(novoLivro);
            res.redirect("/livros");
        } catch (e) {
            res.status(400).render('livro.ejs', { lista: listaLivros, error: e.message });
        }
    },

    marcarComoLido: (req, res) => {
        const {id} = req.body;
        const livro = listaLivros.find(l => l.id === Number(id));
        livro.marcarComoLido();
        res.redirect("/livros");


    }
}

export default livroController;