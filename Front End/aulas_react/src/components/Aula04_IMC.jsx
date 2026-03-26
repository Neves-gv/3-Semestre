const Aula04_IMC = ({nome, peso, altura, cor}) => {

    //  let nome = "Neves";
    //  let peso = 75;
    //  let altura = 1.70;
     let imc = peso / (altura * altura);
     
    return (
        <div>
            <h3>Calcular IMC</h3>
            <p style={{color: cor}}>ola {nome}</p>
            <p>Altura: {altura}cm</p>
            <p>Peso: {peso}Kg</p>
            <p>IMC: {imc.toFixed(1)}Kg/m²</p>
            <hr />
        </div>
    )
}
export default Aula04_IMC;