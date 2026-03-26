import { estilos } from "../style/Estilos"
import { Link, useNavigate } from "react-router-dom"

const Aula14 = () => {
    const navigate = useNavigate();

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 14 - react routers - Navegação em React </h2>
            <h3>Biblioteca que permite criar e gerenciar rotas em react</h3>
            <hr />
            <h3>Navegação com links do React Routers</h3>
            <Link to={'/'}>Pagina Principal</Link>
            <br />
            <Link to={'/Sobre'}>Pagina Sobre</Link>
            <br />
            <Link to={'/sesisenai'}>Pagina inesistente</Link>
            <br />
            <Link to={'/sesisenai'}>Pagina inesistente</Link>
            <br />
            <h3>Navegação com programação utilizando useNavigate </h3>
            <button onClick={() => navigate("/Sobre")}>Sobre</button>
            <hr />
            <h3>Rota dinâmica com useParams</h3>
            <button onClick={() => navigate("/Perfil/Goncalves")}>Perfil do Goncalves</button>
            <button onClick={() => navigate("/Perfil/Neves")}>Perfil do Neves</button>
        </div>
    )
}

export default Aula14