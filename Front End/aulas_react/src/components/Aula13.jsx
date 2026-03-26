import {estilos} from '../style/estilos'
import Aula13_CRUD_Produtos from './Aula13_CRUD_Produtos'
import Aula13_CRUD_Usuarios from './Aula13_CRUD_Usuarios'
import Aula13_Produto from './Aula13_Produto'
import Aula13_Usuario from './Aula13_Usuario'


const Aula13 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>Aula 013 - CRUD com API</h2>
            <h3>Criando um CRUD utilizando API desenvolvida em Backend</h3>
            <hr />
            <Aula13_CRUD_Produtos />
            <Aula13_CRUD_Usuarios />
        </div>
    )
}
export default Aula13