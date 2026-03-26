import { estilos } from '../style/Estilos.jsx';
import { useState } from 'react';
import Aula06_calculadora from './Aula06_calculadora.jsx';
import Aula06_Placar from './Aula06_Placar.jsx';
import Aula06_login from './Aula06_login.jsx';

const Aula06 = () => {
    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [telefone, setTelefone] = useState('');
    const [visivel, setVisivel] = useState(false);

    function botaolimpar() {
        setNome('');
        setCidade('');
        setTelefone('');
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 06 — Estado de um componente</h2>
            <h3>Hook useState em um componente</h3>
            
            <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} value={nome} />
            <input type="text" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} value={cidade} />
            <input type="text" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone} />

            <button onClick={botaolimpar}>Limpar</button>

            <hr />
            <p>Olá, <strong>{nome || '...'}</strong></p>
            <p>Bem vindo a <strong>{cidade || '...'}</strong></p>
            <p>Seu número é: <strong>{telefone || '...'}</strong></p>

            <hr />
            <button onClick={() => setVisivel(!visivel)}>
                {visivel ? 'Ocultar' : 'Mostrar saldo 👀'}
            </button>
            <p>{visivel ? 'R$ 732,18' : 'R$ ***,**'}</p>
            
            <hr />
            <Aula06_Placar />
            <hr />
            <Aula06_calculadora />
            <hr />
            <Aula06_login />
        </div>
    );
};

export default Aula06;