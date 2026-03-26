class Heroi {
    Poderes;
    #identidadesecreta; 
    armas;
    nomedoheroi;
    constructor(Poderes, identidadesecreta, armas, nomedoheroi) {
        this.Poderes = Poderes;
        this.#identidadesecreta = identidadesecreta;
        this.armas = armas;
        this.nomedoheroi = nomedoheroi;
    }
    verpoderes() {
        return `Poderes: ${this.Poderes}`;
    }
    vernome() {
        return `Nome do Herói: ${this.#identidadesecreta}`;
    }
}
class Marvel extends Heroi {
    Pertenceamarvel;
    constructor(Poderes, identidadesecreta, armas, nomedoheroi, Pertenceamarvel) {
        super(Poderes, identidadesecreta, armas, nomedoheroi);
        this.Pertenceamarvel = Pertenceamarvel;
    }
    verpoderes() {
        return `${super.verpoderes()} Universo Marvel`;
    }
    vernome() {
        return `${super.vernome()} Vingador/Aliado`;
    }
    CriadorStan() {
        return "Criado por Stan Lee";
    }
}
class DC extends Heroi {
    PertecenteaDC;

    constructor(Poderes, identidadesecreta, armas, nomedoheroi, PertecenteaDC) {
        super(Poderes, identidadesecreta, armas, nomedoheroi);
        this.PertecenteaDC = PertecenteaDC;
    }
    verpoderes() {
        return `${super.verpoderes()} Universo DC`;
    }

    vernome() {
        return `${super.vernome()} Membro da Liga`;
    }

    CriadadoMalcon() {
        return "Criado por Malcolm Wheeler-Nicholson";
    }
}
const heroi = new Heroi("Eletricidade", "virgil", "Nenhuma", "Super Choque");
console.log(heroi.vernome());
const heroiMarvel = new Marvel("Teia e Força", "Peter Parker", "Lançador de teia", "Homem-Aranha", true);
console.log(heroiMarvel.vernome());
console.log(heroiMarvel.CriadorStan());
const heroiDC = new DC("Super força e Voo", "Clark Kent", "Nenhuma", "Superman", true);
console.log(heroiDC.verpoderes());
console.log(heroiDC.CriadadoMalcon());