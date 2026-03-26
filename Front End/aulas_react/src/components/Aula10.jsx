import { useState, useEffect } from "react"
import { estilos } from "../style/Estilos"

const Aula10 = () => {
    const [contador, setContador] = useState(0)

    // Atualiza título e salva no localStorage sempre que o contador mudar
    useEffect(() => {
        console.log(contador)
        document.title = `Contagem: ${contador}`

        localStorage.setItem('valorcontador', JSON.stringify(contador))
    }, [contador])

    // Recupera valor salvo ao carregar o componente
    useEffect(() => {
        const contadorSalvo = localStorage.getItem("valorcontador")
        setContador(JSON.parse(contadorSalvo))
    }, [])

    function botaoComputador() {
        setContador(contador + 1)
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 10 - useEffect e localStorage</h2>
            <h3>Conhecendo a Hook useEffect e aprendendo a armazenar dados localmente</h3>
            <hr />

            <p>Você clicou {contador} vezes</p>
            <button onClick={botaoComputador}>Clique aqui</button>
        </div>
    )
}
export default Aula10;