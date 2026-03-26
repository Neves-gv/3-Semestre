class Bruxo {
    nome;
    idade;
    feitico;
    casa;
    niveldamagia;
    #quantodemagia = 100;

    constructor(nome, idade, feitico, casa, niveldamagia, quantodemagia) {
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.niveldamagia = niveldamagia;
        this.#quantodemagia = quantodemagia;
    }
    veraquantidadedemagia() {
        return `${this.nome}Magia Atual: ${this.#quantodemagia}`;
    }
    magiagasta() {
        if (this.#quantodemagia >= 10) {
            this.#quantodemagia = this.#quantodemagia - 10;
            console.log(`${this.nome}lançou o feitiço ${this.feitico} (-10 de magia)`);
            console.log(this.#quantodemagia);
            
        }
    }
     recaregarmagia() {
        this.#quantodemagia = this.#quantodemagia + 10;
        console.log(`${this.nome}recuperou energia. (+10 de magia)`);
        console.log(this.#quantodemagia);
    }
}
const pessoa = new Bruxo("Harry", 17, "Expecto Patronum", "Grifinoria", 10, 100);

console.log(pessoa.veraquantidadedemagia());
pessoa.magiagasta()
pessoa.recaregarmagia()