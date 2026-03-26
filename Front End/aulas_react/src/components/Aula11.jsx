import {estilos} from '../style/Estilos.jsx';
import Aula11_Cadastroprodutos from './Aula11_Cadastroprodutos.jsx';

const Aula11 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 11 -- Cadastrando uma lista de produtos </h2>
            <h3>Criando uma lista de produtos e armasenando os dados localmente</h3>
            <Aula11_Cadastroprodutos />
        </div>
    )
}

export default Aula11;