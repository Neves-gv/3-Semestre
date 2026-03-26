const Aula09_Numero = ({ numero, excluir }) => {
    return (
        <span>
            {numero}
            <button onClick={excluir}>Excluir</button>
        </span>
    );
};

export default Aula09_Numero;