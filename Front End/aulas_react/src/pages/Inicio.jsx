import {Link} from 'react-router-dom'

function Inicio(){
    return(
        <div>
            <h1>Bem vindo</h1>
            {/* <a href=""></a> */}
            <Link to='/' > Voltar para pagina principal</Link>
            <hr />
            <Link to='/Detalhes' > Detalhes</Link>
        </div>
    )
}

export default Inicio