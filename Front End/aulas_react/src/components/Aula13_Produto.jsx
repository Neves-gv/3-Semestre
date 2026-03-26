
const Aula13_Produto = ({ produto, botaoExcluirProduto, botaoAlterar }) => {

    if (!produto) return
    return (
        <div style={estilos.cardProduto}>
            <img src={produto.link_imagem} alt="" style={estilos.imagem} />
            <h2 style={estilos.titulo}>{produto.nome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.preco).toFixed(2)} </p>
            <p>{produto.categoria}</p>
            { produto.freteGratis == true && <p>Frete Grátis</p> }
            <a href={produto.linkProduto} style={estilos.botao}>Ver Produto</a>
            <button style={estilos.botao} onClick={() => botaoExcluirProduto(produto.id_produto)} >Excluir</button>
            <button style={estilos.botao} onClick={() => botaoAlterar(produto)} >Alterar</button>

        </div>
    )
}

const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250, 
        textAlign: 'center'
    },

    imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },

    titulo: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },

    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },

    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },

    freteGratis: {
        fontWeight: "bold"
    }
};

export default Aula13_Produto