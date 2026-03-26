import { useEffect, useState } from "react"
import Aula13_Usuario from "./Aula13_Usuario"

const Aula13_CRUD_Usuarios = () => {
    const [listaUsuarios, setListaUsuario] = useState([])
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    function botaoAdicionar() {
        const novoUsuario = {
            nome: nome,
            email: email,
        }

        const novaListaUsuario = [...listaUsuarios, novoUsuario]
        setListaUsuario(novaListaUsuario)
        localStorage.setItem('vetorListaUsuario', JSON.stringify(novaListaUsuario))

        setNome('')
        setEmail('')

    }
    const botaoExcluir = async () => {

        if (!window.confirm('Deseja realmente excluir o usuario?'))

            try {
                const resposta = await fetch(`http://10.130.42.68:3001/usuarios/${id_usuarios}`, {
                    method: 'DELETE',
                });
                if (!resposta.ok) {
                    throw new Error('Erro ao excluir usuario' + resposta.statusText);
                }
                buscarDados()

            } catch (erro) {
                console.error('Erro ao adicionar usuario', erro.message);

            }
    }


    async function buscarDados() {
        try {
            const resposta = await fetch('http://10.130.42.68:3001/usuarios')
            const dados = await resposta.json()
            setListaUsuario(dados)
        } catch (error) {
            console.error('Erro ao carregar os dados', error);
        }
    }
    useEffect(() => { buscarDados() }, [])

    return (
        <div>
            <h1>Cadastro de Usuarios</h1>
            <div style={{ display: "flex", flexDirection: 'column', gap: 10 }}>
                <input type="text" placeholder="Nome" style={estilos.inputs} value={nome}
                    onChange={(event) => setNome(event.target.value)} />
                <input type="text" placeholder="email" style={estilos.inputs} value={email}
                    onChange={(event) => setEmail(event.target.value)} />
                <button style={estilos.botao} onClick={botaoAdicionar}>Adicionar Usuario</button>
                <button style={estilos.botao} onClick={botaoExcluir}>Excluir Usuario</button>

                <hr />
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }} >
                    {
                        listaUsuarios.map((usuario, pos) => (
                            <Aula13_Usuario key={pos} usuario={usuario} botaoExcluir={botaoExcluir} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const estilos = {
    cadastro: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    inputs: {
        padding: "10px",
        fontSize: "16px",
    },
    botao: {
        backgroundColor: "#e30613",
        color: "#fff",
        borderRadius: "5px",
        fontWeight: "bold",
        border: "none",
        padding: "10px",
        fontSize: "16px",
    }
}

export default Aula13_CRUD_Usuarios