// import um arquivo css tradicional
import '../style/Aula03.css'
import {estilos} from '../style/Estilos.jsx';
import Aula03_Login from './Aula03_Login.jsx';

export const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 03 -- Componentes e estilização</h2>
            <h3>Criação de coponentes reutilizaveis  e suas estilizações </h3>
            <p>Aprendendo a criar e reutilizar componentes e estilização para melhorar a UI</p>

            <br />
            <p className='texto'>CSS Externo</p>
            <p className='descricao'>A forma mais simples e classica de estilização CSS tradicional</p>
            <br />
            <p style={ { color:'red', fontWeight: 'bold' } } >Estilização em inline</p>
            <p style={{fontStyle:'italic'}}>estilos aplicados diretamente nos elementos como objetos</p>

            <br />

            <p style={estilos.tituloModulo}>Css Modulo</p>
            <p style={estilos.descricaoMOdulo}>Css Modulazido é a forma mais comum para mobile</p>
            <br />

            <Aula03_Login />

        </div>
    )
}



export default Aula03;