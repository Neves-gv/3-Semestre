class Ranking {
    constructor(id, nome, pontuacao = 0) {
        if (!id || !nome) {
            throw new Error("id e nome são obrigatórios.");
        }
        this.id = id;
        this.nome = nome;
        this.pontuacao = Number(pontuacao);
        this.nivel = this.verificarPontuacao();
    }
    descricao() {
        return `${this.nome} (ID: ${this.id})`;
    }
    verificarPontuacao() {
        if (this.pontuacao <= 100) return 'Iniciante';
        if (this.pontuacao <= 200) return 'Intermediário';
        if (this.pontuacao <= 300) return 'Avançado';
        return 'Mestre';
    }

    ganhodepontos() {
        this.pontuacao += 10;
        this.nivel = this.verificarPontuacao();
    }
}
export default Ranking;