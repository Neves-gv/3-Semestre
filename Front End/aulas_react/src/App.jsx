import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Perfil from './pages/Perfil';
import Inicio from './pages/Inicio';
import Detalhes from './pages/Detalhes';
import Contato from './pages/contato';
import Filme from './pages/Filme'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Detalhes" element={<Detalhes />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Perfil/:nome" element={<Perfil />} />
                <Route path='/Filme/:id' element={<Filme />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    ); 
}

export default App;