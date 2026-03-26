class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Nome: ${this.nome} | Idade: ${this.idade}`;
    }
}

class PFisica extends Pessoa {
    cpf;
    constructor(nome, idade, cpf) {
        super(nome, idade); 
        this.cpf = cpf;
    }
}

class PJuridica extends Pessoa {
    cnpj;
    constructor(nome, idade, cnpj) {
        super(nome, idade);
        this.cnpj = cnpj;
    }
}
const harry = new PFisica("Harry", 17, "000.000.000-00");
console.log(harry.apresentar()); 
const sesi = new PJuridica("SESI - CE 025", 50, "00.000.0000-001-00");
console.log(sesi.apresentar());
