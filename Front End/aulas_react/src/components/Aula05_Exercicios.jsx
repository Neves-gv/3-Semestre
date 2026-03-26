import { estilos } from '../style/Estilos.jsx';

export const Aula05_Exercicios = () => {

    const botaoClique = () => alert('Sim');
    const botaoClique2 = () => alert('Não');

    const onCampoKeyDown = (event) => {
        console.log('Campo: onKeyDown ->', event.key);
        if (event.key === 'p') {
            event.target.style.backgroundColor = 'blue';
        }
        if (event.key === 'v') {
            event.target.style.backgroundColor = 'black';
        }
        if (event.key === 'y') {
            event.target.style.backgroundColor = 'yellow';
        }
        if (event.key === 'g') {
            event.target.style.backgroundColor = 'green';
        }
        
    };

    return (
        <div style={estilos.cardAula} onKeyDown={(e) => console.log('Geral:', e.key)} tabIndex={0}>
            <h3>Exercício Aula 05</h3>
            <button onClick={botaoClique}>Clique aqui (Sim)</button>
            <button onClick={botaoClique2}>Clique aqui2 (Não)</button>
            <hr />
            <input
                onChange={(e) => console.log('Digitando:', e.target.value)}
                type="text"
                placeholder='Digite algo...' />
            <hr />
            <div
                onMouseEnter={(e) => e.target.style.backgroundColor = 'blue'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'red'}
                style={{ width: 100, height: 100, backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                Quadrado
            </div>
            <hr />
            <h4>Campo com Múltiplos Eventos</h4>
            <input
                type="text"
                placeholder="p, v, y, g"
                onClick={() => console.log('onClick')}
                onChange={(event) => console.log('onChange', event.target.value)}
                onMouseEnter={() => console.log('onMouseEnter')}
                onMouseLeave={() => console.log('onMouseLeave')}
                onKeyDown={onCampoKeyDown}
                style={{ color: 'black' }} 
            />
        </div>
    );
};
export default Aula05_Exercicios;