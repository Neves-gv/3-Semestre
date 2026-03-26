import {Link} from 'react-router-dom'

function NotFount(){
    return(
        <div>
            <h1>Pagina não encontrada</h1>
            {/* <a href=""></a> */}
            <Link to='/' > Voltar para pagina principal</Link>
        </div>
    )
}

export default NotFount