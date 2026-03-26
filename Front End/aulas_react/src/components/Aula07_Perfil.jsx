import React, { useState } from 'react';

const Aula07_Perfil = ({ foto, nome }) => {
    return (
        <div style={estilos.container}>
            <div style={estilos.card}>
                <Img foto={foto} />
                <Nome nome={nome} />
                <Entrar />
            </div>
        </div>
    );
};

export const Img = ({ foto }) => {
    return (
        <img
            style={estilos.imagem}
            src={foto}
            alt="Foto de Perfil"
        />
    );
};

export const Nome = ({ nome }) => {
    return <h3 style={estilos.titulo}>{nome}</h3>;
};

const Entrar = () => {
    const [seguindo, setSeguindo] = useState(false);

    return (
        <button 
            style={{...estilos.botao, backgroundColor: seguindo ? 'rgb(32, 61, 246)' : '#1404ffa4'}} onClick={() => setSeguindo(!seguindo)}>
            {seguindo ? 'Seguindo' : 'Seguir'}
        </button>
    );
};

const estilos = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#5f5f5f',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: '350px'
    },
    imagem: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginBottom: '20px',
        objectFit: 'cover',
        border: '2px solid #ffffff'
    },
    titulo: {
        margin: '0 0 20px 0',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    botao: {
        width: '100%',
        padding: '14px',
        marginTop: '20px',
        borderRadius: '8px',
        border: 'none',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer'
    },
};

export default Aula07_Perfil;