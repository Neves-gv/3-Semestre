class Pessoa { 
    #documento;

        nome;
        idade;
    constructor(nome, idade, documento) {
        this.nome = nome;
        this.idade = idade;
        this.#documento = documento;
    }

    apresentar() {
        return `${this.nome}, ${this.idade}`;
    }
    mostrarDocumento() {
        return `${this.nome}, ${this.idade}, ${this.#documento}`;
    }
}

const pessoa1 = new Pessoa("Silvia", 28, '00000000000');
console.log(pessoa1.apresentar());
console.log(pessoa1.mostrarDocumento());