import { useState, useEffect } from "react";
import Aula09_Nome from "./Aula09_Nome";

function Aula09_ListaNomes() {
  const [listaPresenca, setListaPresenca] = useState(() => {
    const dadosSalvos = localStorage.getItem("lista_churrasco");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  const [nome, setNome] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    localStorage.setItem("lista_churrasco", JSON.stringify(listaPresenca));
  }, [listaPresenca]);

  function adicionarPessoa() {
    if (nome.trim() === "" || item.trim() === "") return;

    const novaPessoa = {
      id: Date.now(),
      nome: nome,
      item: item
    };

    setListaPresenca([...listaPresenca, novaPessoa]);
    setNome("");
    setItem("");
  }

  function limparLista() {
    // Só limpa se o usuário realmente quiser
    if (window.confirm("Deseja realmente apagar toda a lista?")) {
      setListaPresenca([]);
    }
  }

  function excluirPessoa(id) {
    const novaLista = listaPresenca.filter(pessoa => pessoa.id !== id);
    setListaPresenca(novaLista);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Presença do Churrasco</h1>

      <input
        type="text"
        placeholder="Digite o nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        type="text"
        placeholder="O que vai levar?"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button onClick={adicionarPessoa}>Adicionar</button>
      <button onClick={limparLista} style={{ marginLeft: "10px", backgroundColor: "#ffcccc" }}>
        Limpar Lista
      </button>

      <hr />

      <div>
        {listaPresenca.length === 0 ? (
          <p>A lista está vazia. Adicione alguém!</p>
        ) : (
          listaPresenca.map((pessoa, index) => (
            <Aula09_Nome
              key={pessoa.id}
              id={pessoa.id}
              ordem={index + 1}
              nome={pessoa.nome}
              item={pessoa.item}
              onExcluir={excluirPessoa}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Aula09_ListaNomes;