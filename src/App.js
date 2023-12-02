import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login'; // Importa tu componente Login
import Registro from './Components/Registro';
import Cuerpo from './Components/Cuerpo';
import Editarusuario from './Components/Editarusuario';
import Recomendaciones from './Components/AtencionC';
import Rutinasusuario from './Components/Rutinausuario';
import AdmDiscapacidad from './Components/AdmDiscapacidad';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cuerpo" element={<Cuerpo/>} />
        <Route path="/editarperfil" element={<Editarusuario />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/rutinasusuario" element={<Rutinasusuario/>} />
        <Route path="/admdiscapacidad" element={<AdmDiscapacidad/>} />
        
      </Routes>
    </Router>
  );
}

export default App;