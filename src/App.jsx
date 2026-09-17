import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GranFormatoPage from './pages/GranFormatoPage';
import MerchandisingPage from './pages/MerchandisingPage';
import ServiciosComercialesPage from './pages/ServiciosComercialesPage'
import ServiciosEspecializadosPage from './pages/ServiciosEspecializadosPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/granformato" element={<GranFormatoPage />} />
        <Route path="/merchandising" element={<MerchandisingPage />} />
        <Route path="/servicioscomerciales" element={<ServiciosComercialesPage />} />
        <Route path="/serviciosespecializados" element={<ServiciosEspecializadosPage />} />
      </Route>
    </Routes>
  );
}
