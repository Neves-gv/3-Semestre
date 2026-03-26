import { useState } from 'react';

// Sub-componente para cada time
const ContadorTime = ({ nomeTime }) => {
    const [pontos, setPontos] = useState(0);

    const aumentar = (valor) => setPontos(pontos + valor);
    const diminuir = () => {
        if (pontos > 0) setPontos(pontos - 1);
    };

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h2>{nomeTime}</h2>
            <h3>Pontuação: {pontos}</h3>
            <button onClick={() => aumentar(1)}>+1 (Lance Livre)</button>
            <button onClick={() => aumentar(2)}>+2 (Cesta)</button>
            <button onClick={() => aumentar(3)}>+3 (Triplo)</button>
            <button onClick={diminuir}>Corrigir (-1)</button>
        </div>
    );
};

const Aula06_Placar = () => {
    return (
        <div>
            <h1>Placar de Basquete</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                <ContadorTime nomeTime="Vitor" />
                <ContadorTime nomeTime="Neves" />
            </div>
        </div>
    );
};

export default Aula06_Placar;