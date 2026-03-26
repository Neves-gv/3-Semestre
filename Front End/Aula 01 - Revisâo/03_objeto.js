const pais = {
    'nome' : 'Brasil',
    'população' : '200Milhões',
    'capital' : 'Brasilia',
    'idioma' : ' Português',
    "região" : {
        "sudeste" : "Sp / Rj",
        "norte" : "AH AC"
    }
}

console.log(pais.capital);
console.log(pais.região);
console.log(pais.região.norte);

let (nome, população, capital, idioma, região) = pais;
console.log(nome, capital, população, idioma);

const transacao ={
    "chavePix" : 37587489378,
    "valor" : 10000.00
}