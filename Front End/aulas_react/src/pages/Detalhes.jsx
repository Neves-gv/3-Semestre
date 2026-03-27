import {Link} from 'react-router-dom'

function Detalhes(){
    return(
        <div>
            <h1>Mais informações</h1>
            {/* <a href=""></a> */}
            <Link to='/' > Voltar para pagina principal</Link>
            <br />
            <Link to='/Contato' > Contato</Link>
        </div>
    )
}

export default Detalhes