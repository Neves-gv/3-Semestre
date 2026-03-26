import logoReact from '../assets/react.svg'
import '../style/Cabecalho.css'

const Cabecalho = ({aula}) => {
    return (
        <header className='cabecalho'>
            <img src={logoReact} alt="" />
            <div>
                <h1>SENAI - Desenvolvimento de sistema</h1>
                <p>Aulas de Front-end - {aula} </p>
            </div>
            <img src="https://i.pinimg.com/1200x/98/af/9f/98af9f83783c79a3c7e1138346f2cfc8.jpg" alt="" />
        </header>
    )
}

export default Cabecalho;