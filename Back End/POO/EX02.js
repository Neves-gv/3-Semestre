class Bruxo{
    //criando o metado construtor
    constructor(nome, idade, feitico, casa, niveldamagia){

        //atributos
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.niveldamagia = niveldamagia;
    }
}
const pessoa1 = new Bruxo("cladia", 25, "fogo", "Predio", 10);
console.log(pessoa1);
const pessoa2 = new Bruxo("Barreto", 30, "Barro", "ponte", 1);
console.log(pessoa2);