export const Aula04_Filmes = ({ img, nome, genero }) => {
    return (
        <div style={estilos.container}> 
            <div style={estilos.card}>
                <img
                    src={img}
                    alt={nome}
                    style={estilos.imagem}
                />
                <div style={estilos.corpoCard}>
                    <h3 style={estilos.titulo}>{nome}</h3>
                    <h5>Gênero: {genero}</h5>
                </div>
            </div>
        </div>
    );
};
export default Aula04_Filmes;

const estilos = {
    container: {
        display: 'inline-block', 
        margin: '10px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        width: '180px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        backgroundColor: '#fff',
        overflow: 'hidden' 
    },
    imagem: {
        width: '100%',
        height: '250px',
        objectFit: 'cover'
    },
    corpoCard: {
        padding: '12px',
        textAlign: 'center'
    },
    titulo: {
        margin: '0 0 8px 0',
        fontSize: '1.1rem'
    },
};