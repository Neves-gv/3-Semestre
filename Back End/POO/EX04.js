class Bruxo {
    nome;
    idade;
    feitico;
    casa;
    niveldamagia;
    #quantodemagia;

    constructor(nome, idade, niveldamagia, quantodemagia) {
        this.nome = nome;
        this.idade = idade;
        this.niveldamagia = niveldamagia;
        this.#quantodemagia = quantodemagia;
    }

    apresentar() {
        return `Nome: ${this.nome} | Idade: ${this.idade}`;
    }
}

class CasaGrifinoria extends Bruxo {
    casa;
    feiticoassinatura;

    constructor(nome, idade, niveldamagia, feiticoassinatura) {
        super(nome, idade, niveldamagia); 
        this.casa = "Grifinória";
        this.feiticoassinatura = feiticoassinatura;
    }
        apresentar() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Casa ${this.casa}`;
    }
}

class CasaSonserina extends Bruxo {
    casa;
    feiticoassinatura;

    constructor(nome, idade, niveldamagia, feiticoassinatura) {
        super(nome, idade, niveldamagia);
        this.casa = "Sonserina";
        this.feiticoassinatura = feiticoassinatura;
    }
         apresentar() {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Casa ${this.casa}`;
    }
}

const pessoa = new CasaGrifinoria("Harry", 17, 10, "Expecto Patronum");
console.log(pessoa.apresentar());
const pessoa1 = new CasaSonserina("Draco", 17, 10, "Avadaquebrada");
console.log(pessoa1.apresentar());
