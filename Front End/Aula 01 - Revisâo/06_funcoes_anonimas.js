//função nomeada
function saudacao (nome){
    console.log(`tenha um bom dia ${nome}`);
    
}
saudacao('Neves')
//função anonimo
const saudacao2 = function  (nome){
    console.log(`tenha um bom dia ${nome}`);
    
}
saudacao2('VGN')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//função nomeada
function soma (n1 , n2){
    let resultado = n1 + n2;
    return resultado;
}

let resultado = soma( 5, 5);
console.log( resultado);

//função anonimo
const soma2 = function (n1 , n2){
    let resultado = n1 + n2;
    return resultado;
}

let resultado2 = soma( 5, 5);
console.log( resultado);

