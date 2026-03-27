import { Link, useParams } from 'react-router-dom'

function Perfil(){
    const { id } = useParams();
    
    return(
        <div>
            <h1>Este é o Filme de {id}</h1>
            {/* <a href=""></a> */}
            <Link to='/' > Voltar para pagina principal</Link>
        </div>
    )
}

export default Perfil