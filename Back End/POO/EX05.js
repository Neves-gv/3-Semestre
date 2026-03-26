class Bruxo {
    nome;
    idade;
    feitico;
    niveldamagia;
    #quantodemagia = 100;

    constructor(nome, idade, niveldamagia, feitico = "Nenhum", quantodemagia = 100) {
        this.nome = nome;
        this.idade = idade;
        this.niveldamagia = niveldamagia;
        this.feitico = feitico;
        this.#quantodemagia = quantodemagia;
    }

    apresentar() {
        return `Nome: ${this.nome} | Idade: ${this.idade}`;
    }
}

class CasaGrifinoria extends Bruxo {
    casa;
    feiticoassinatura;

    constructor(nome, idade, niveldamagia, feiticoassinatura, feitico) {
        super(nome, idade, niveldamagia, feitico); 
        this.casa = "Grifinória";
        this.feiticoassinatura = feiticoassinatura;
    }

    apresentar() {
        return `${super.apresentar()} | Casa: ${this.casa} | Magia Assinatura: ${this.feiticoassinatura} | Nível: ${this.niveldamagia} | Feitiço: ${this.feitico}`;
    }
}

class CasaSonserina extends Bruxo {
    casa;
    feiticoassinatura;

    constructor(nome, idade, niveldamagia, feiticoassinatura, feitico) {
        super(nome, idade, niveldamagia, feitico); 
        this.casa = "Sonserina";
        this.feiticoassinatura = feiticoassinatura;
    }

    apresentar() {
        return `${super.apresentar()} | Casa: ${this.casa} | Magia Assinatura: ${this.feiticoassinatura} | Nível: ${this.niveldamagia} | Feitiço: ${this.feitico}`;
    }
}
const pessoa = new Bruxo("Hermione", 17, "99", "Wingardium Leviosa");
console.log(pessoa.apresentar());
const pessoa1 = new CasaSonserina("Draco", 17, "10", "Sectumsempra", "Mente");
console.log(pessoa1.apresentar());
const pessoa2 = new CasaGrifinoria("Harry", 17, "10", "Expecto Patronum", "Expelliarmus");
console.log(pessoa2.apresentar());