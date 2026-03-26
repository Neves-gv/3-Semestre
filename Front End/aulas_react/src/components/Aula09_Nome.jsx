function Aula09_Nome({ id, ordem, nome, item, onExcluir }) {
  return (
    <div>
      <p>
        {ordem}º - {nome} vai levar {item}
      </p>

      <button onClick={() => onExcluir(id)}>
        Excluir
      </button>
    </div>
  );
}

export default Aula09_Nome;