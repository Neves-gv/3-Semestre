import { estilos } from "../style/Estilos";
import { useState } from "react";

const Aula12 = () => {
    const [imagem, setImagem] = useState('');

const buscarDados = async () => {
    // No fetch colocamos o endpoint da API
    // https://localhost:3000/usuarios
    const resposta = await fetch('https://dog.ceo/api/breeds/image/random');
    const daados = await resposta.json();
    console.log(dados.message);
    setImagem(dados.message);
}

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 12 - Consumo APIs</h2>
            <h3>Aprendendo a utilizar APIs em React</h3>
            <hr />
            <div>
                <p>Imagem de cachorro</p>
                <img src={imagem} width={300} />
                <button onClick={buscarDados}>Exibir imagem</button>
            </div>
        </div>
    )
}

export default Aula12;