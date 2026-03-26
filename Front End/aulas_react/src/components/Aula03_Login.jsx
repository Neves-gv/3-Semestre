/** @type {{ [key: string]: import('react').CSSProperties }} */
const Aula03_Login = () => {
    return (
        <div style={Estilos.container}>
            <div style={Estilos.card}>
                <img style={Estilos.card} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmhaEK0AahY6v7bsr8h61jxmKMol_EbpZag&s" alt="" />
                <br />
                <h1 style={Estilos.titulo}>Login</h1>
                <br />
                <div>Usuario</div>
                <input type="text" Usuario />
                <br />
                <div>Senha</div>
                <br />
                <input type="text" Usuario />
                <br />
                <button style={Estilos.botao}>Cadastra-se</button>
                <br />
                <button style={Estilos.botao}>Logar</button>
            </div>
        </div>
    )
}
const Estilos = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#fbfbfbad',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '350px',
    },
    imagem: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginBottom: '20px',
        objectFit: 'cover',
    },
    titulo: {
        margin: '0 0 25px 0',
        color: '#ff0000',
        fontSize: '24px',
    },
    botao: {
        width: '100%',
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#ff0000',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
    },
};
export default Aula03_Login;