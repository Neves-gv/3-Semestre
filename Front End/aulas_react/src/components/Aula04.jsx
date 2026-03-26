import { estilos } from '../style/Estilos.jsx';
import Aula04_IMC from './Aula04_IMC.jsx';
import Aula04_Filmes from './Aula04_Filmes.jsx';

const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 04 — Props</h2>
            <h3>Conceitos básicos e configuração de ambiente</h3>
            <p>Criação de componentes reutilizáveis e suas estilizações</p>
            <hr />
            <Aula04_IMC nome='Neves' peso="75" altura='1.70' cor="#b300ff" />
            <Aula04_IMC nome='Jorge' peso="80" altura='1.80' cor="#b300ff" />
            <hr />
            <div style={{display: 'flex', gap: '18'}}>
                <Aula04_Filmes
                    img="https://i.pinimg.com/736x/46/91/c4/4691c479cbf53076d3e99d13320c0a5e.jpg"
                    nome="Como treinar o seu Dragão" genero="Ação" />
                <br />
                <Aula04_Filmes
                    img="https://i.pinimg.com/1200x/d0/3d/53/d03d53622f49db7ae45772d3c3e6c639.jpg"
                    nome="Tropa de Elite" genero="Ação" />
                <br />
                <Aula04_Filmes
                    img="https://i.pinimg.com/1200x/4e/74/0d/4e740d2ab7ff95d74bd6674bf947afd1.jpg"
                    nome="Velozes e Furiosos" genero="Ação" />
            </div>
        </div>
    );
}

export default Aula04;