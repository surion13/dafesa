import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Puedes añadir más rutas aquí si tu proyecto crece */}
      </Routes>
   
  );
}