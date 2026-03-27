import {Link} from 'react-router-dom'

function Contato(){
    return(
        <div>
            <h1>Entre em contato</h1>
            {/* <a href=""></a> */}
            <Link to='/' > Voltar para pagina principal</Link>
            <br />
            <Link to='/Inicio' > Inicio</Link>
        </div>
    )
}

export default Contato