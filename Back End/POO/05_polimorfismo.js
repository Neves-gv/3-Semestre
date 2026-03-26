class Pessoa {
    nome;

    constructor(nome) {
        this.nome = nome;    }
                apresentar() {
        return `Nome: ${this.nome}`;
    }
}

class PFisica extends Pessoa {
        cpf;
    constructor(nome, cpf) {
        super(nome); 
        this.cpf = cpf;
    }
        apresentar() {
        return `Nome: ${this.nome} | cpf ${this.cpf}`;
    }
}
class PJuridica extends Pessoa {
    cnpj;
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }
}

const pessoa = new Pessoa("draco", "000.000.000-00");
console.log(pessoa.apresentar()); 
const pessoa1 = new PFisica("Harry", "000.000.000-01");
console.log(pessoa1.apresentar()); 
const pessoa2 = new PFisica("Harry", "000.000.000-02");
console.log(pessoa2.apresentar()); 

