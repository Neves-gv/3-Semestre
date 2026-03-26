import { estilos } from '../style/Estilos.jsx';
import Aula05_Exercicios from './Aula05_Exercicios.jsx';

export const Aula05 = () => {
    const botaoClique = () => {
        alert('Voce cllicou no botão')
        console.log('Clique no Botão');
    }
    const botaoduploclique = () => {
        alert("duplo clique")
    }
    function entradaMouse(event) {
        console.log('Mouse entrou');
        event.target.style.backgroundColor = '#4c00ff';
    }
    function saidaMaouse(event) {
        console.log('Mouse saiu');
        event.target.style.backgroundColor = '#ff0000';
    }
    function alterarcor(envet) {
        if (envet.key == 'a') {
            event.target.style.backgroundColor = '#2205ff';
        }
        if (envet.key == 'w') {
            event.target.style.backgroundColor = '#05ff3f';
        }
        if (envet.key == 'd') {
            event.target.style.backgroundColor = '#a305ff';
        }
        if (envet.key == 's') {
            event.target.style.backgroundColor = '#565656ed';
        }
    }
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 05 -- Eventos de um Componentes</h2>
            <h3>Os eeventos são fundamentais para criar interativibilidade em aplicadivos</h3>
            <hr />
            <p>Evento onlick - clique do usuario em qualquer elemento</p>
            <button onClick={botaoClique}>Clique aqui</button>
            <p onDoubleClick={botaoduploclique}>Este paragrafo da 2 clique</p>
            <p onDoubleClick={() => { alert("duplo clique2") }}>Este paragrafo da 2 clique2</p>
            <hr />

            <p>Evento onCharge - Sempre que um campo de entrada é alterdo</p>
            <input onChange={(event) => alert(event.target.value)} type="text" placeholder='Digite algo...' />
            <select onChange={(event) => alert(event.target.value)}>
                <option value="1A">1° A EM</option>
                <option value="2A">2° A EM</option>
                <option value="3A">3° A EM</option>
                <option value="3B">3° B EM</option>
            </select>
            <hr />
            <p>event onMouseEnter/ onMouseleve</p>
            <p onMouseEnter={entradaMouse} onMouseLeave={saidaMaouse}>passe o mause aqui</p>
            <hr />
            <p>evento onKeyDown - Aciona em evento quando  preciona uma tecla</p>
            <input type="text" onKeyDown={(envet) => alert(envet.key)} />
            <input type="text" onKeyDown={alterarcor} placeholder='a - azul, w - verde, d - roxo,s - cinza' />
            <hr />
            <Aula05_Exercicios />
        </div>
    )
}

export default Aula05;