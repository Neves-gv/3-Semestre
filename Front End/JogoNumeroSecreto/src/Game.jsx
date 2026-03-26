import { useState } from "react";
import { estilos } from "./Gameestilos"
const Game = () => {
    function sortearNumero() {
        return Math.floor(Math.random() * 100 + 1)
    }
    const [numeroSecreto, setSecreto] = useState(sortearNumero);
    const [chute, setChute] = useState('');
    const [mensagem, setMensagem] = useState('Adivinha o numero entre 1 a 100');
    const [tentativas, setTentativas] = useState(1);
    const [jogoFinalizado, setFinalizado] = useState(false);

    function botaochutar() {
        if (numeroSecreto == chute) {
            setMensagem(`🥶🪻 Acertou em ${tentativas} tentativas!`)
            setFinalizado(true);
        } else if (numeroSecreto < chute) {
            setMensagem(`Voce chutou ${chute}, o numero é menor`);
            setTentativas(tentativas + 1)
        } else {
            setMensagem(`Voce chutou ${chute}, o numero é maior`);
            setTentativas(tentativas + 1)
        }
    }
    const novoJogo = () => {
        setSecreto(sortearNumero());
        setChute('');
        setMensagem('Adivinha o numero entre 1 a 100');
        setTentativas(1);
        setFinalizado(false);
    }
    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo Numero secreto</h1>
                        <p style={estilos.mensagem}> {mensagem} </p>
                    </div>
                    <input value={chute} onChange={(event) => setChute(event.target.value)} type="number" style={estilos.chute}/>
                    <div style={estilos.botoes}>
                        <button style={estilos.botao} onClick={botaochutar} disabled={jogoFinalizado}>Chutar</button>
                        <button style={estilos.botao} onClick={novoJogo}>Novo jogo</button>
                    </div>
                </div>
                <img src="./img/ia.png" style={estilos.imagem}/>
            </div>
        </section>
    )
}

export default Game;