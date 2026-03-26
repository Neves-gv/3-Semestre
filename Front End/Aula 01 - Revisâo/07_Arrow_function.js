const saudacao2 = function  (nome){
    console.log(`tenha um bom dia ${nome}`);
    
}
saudacao2('VGN')

//Arrow function
const saudacao3 = (nome) => {
    console.log(`tenha um bom dia ${nome}`);
    
}
saudacao2('VGN')

//Arrow function de soma 

const soma3 = (n1 , n2) => {
    let resultado = n1 + n2;
    return resultado;
}

let resultado3 = soma( 5, 5);
console.log( resultado);
