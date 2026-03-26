const Aula07_Muticomponentes = () => {
    return (
        <div>
            <p>Meu componente padrão</p>
            <Meucomponentenomeado/>
        </div>
    );
};

export const Meucomponentenomeado = () => {
    return <p>Meu componente nomeado</p>;
};

export const Meucomponentenomeado2 = () => {
    return <p>Meu componente nomeado 2</p>;
};

export const enderecoServidor = "localhost";

export default Aula07_Muticomponentes;