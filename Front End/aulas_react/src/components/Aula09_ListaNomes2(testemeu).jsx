import { useState } from "react";

const Aula09_ListaNomes = () => {
    const [listaPresenca, setListaPresenca] = useState([]);
    const [nome, setNome] = useState("");
    const [item, setItem] = useState("");

    function botaoAdicionar() {
        if (nome.trim() !== "" && item.trim() !== "") {
            setListaPresenca([...listaPresenca, { nome, item }]);
            setNome("");
            setItem("");
        }
    }

    function botaoExcluir(id) {
        const novaLista = listaPresenca.filter((_, index) => index !== id);
        setListaPresenca(novaLista);
    }

    function limparLista() {
        setListaPresenca([]);
    }

    return (
        <div style={localEstilos.container}>
            <div style={localEstilos.card}>
                <h1 style={localEstilos.titulo}>
                    Lista de Presença do Churrasco
                </h1>

                <div style={localEstilos.inputsContainer}>
                    <input
                        style={localEstilos.input}
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        style={localEstilos.input}
                        placeholder="O que vai levar?"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                    />
                </div>

                <div style={localEstilos.botoesContainer}>
                    <button
                        style={{ ...localEstilos.botao, ...localEstilos.botaoAdicionar }}
                        onClick={botaoAdicionar}
                    >
                        Adicionar
                    </button>

                    <button
                        style={{ ...localEstilos.botao, ...localEstilos.botaoLimpar }}
                        onClick={limparLista}
                    >
                        Limpar Tudo
                    </button>
                </div>

                <hr style={localEstilos.linha} />

                {listaPresenca.map((pessoa, index) => (
                    <div key={index} style={localEstilos.itemLista}>
                        <span>
                            <strong>{index + 1}º</strong> - {pessoa.nome} - {pessoa.item}
                        </span>

                        <button
                            style={{ ...localEstilos.botao, ...localEstilos.botaoExcluir }}
                            onClick={() => botaoExcluir(index)}
                        >
                            Excluir
                        </button>
                    </div>
                ))}

                {listaPresenca.length > 0 && (
                    <button
                        style={{ ...localEstilos.botao, ...localEstilos.botaoLimparLista }}
                        onClick={limparLista}
                    >
                        Limpar Lista
                    </button>
                )}
            </div>
        </div>
    );
};

const localEstilos = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1f2937",
        fontFamily: "Arial, sans-serif",
    },

    card: {
        backgroundColor: "#111827",
        padding: "30px",
        borderRadius: "12px",
        width: "400px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        color: "#fff",
    },

    titulo: {
        textAlign: "center",
        marginBottom: "20px",
    },

    inputsContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "15px",
    },

    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        outline: "none",
        fontSize: "14px",
    },

    botoesContainer: {
        display: "flex",
        gap: "10px",
        marginBottom: "15px",
    },

    botao: {
        padding: "10px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "0.3s",
        flex: 1,
    },

    botaoAdicionar: {
        backgroundColor: "#26ff00",
        color: "#fff",
    },

    botaoLimpar: {
        backgroundColor: "#ff0000",
        color: "#fff",
    },

    botaoExcluir: {
        backgroundColor: "#ef4444",
        color: "#fff",
        padding: "5px 10px",
    },

    botaoLimparLista: {
        marginTop: "15px",
        backgroundColor: "#dc2626",
        color: "#fff",
        width: "100%",
    },

    itemLista: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#374151",
        padding: "8px",
        borderRadius: "6px",
        marginBottom: "8px",
    },

    linha: {
        borderColor: "#374151",
        margin: "15px 0",
    },
};

export default Aula09_ListaNomes;