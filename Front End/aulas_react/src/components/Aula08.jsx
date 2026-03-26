import { estilos } from '../style/Estilos.jsx';

const Aula08 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 08 — Revisão</h2>
            <h3>Revisão de conteúdo com o jogo Número Secreto</h3>
            <a style={localEstilos.container} href="https://jogo-numero-secreto-gold-seven.vercel.app/" >
                <img style={localEstilos.imagem} src="../img/jogosecreto.png" />
                <p>Jogar</p>
            </a>
        </div>
    );
};

const localEstilos = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textDecoration: 'none',
        color: '#fff',
    },
    imagem: {
        width: '120px',
        height: '120px',
        marginBottom: '10px',
        objectFit: 'cover',
        border: '2px solid #ffffff',
    },
};

export default Aula08;