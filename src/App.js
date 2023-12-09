import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login'; // Importa tu componente Login
import Registro from './Components/Registro';
import Cuerpo from './Components/Cuerpo';
import Editarusuario from './Components/Editarusuario';
import Recomendaciones from './Components/AtencionC';
import Rutinasusuario from './Components/Rutinausuario';
import AdmDiscapacidad from './Components/AdmDiscapacidad';
import AdmCuerpo from './Components/AdmCuerpo';
import AdmRutina from './Components/AdmRutina';
import AdmNotificacion from './Components/AdmNotificacion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Login />} />

        <Route path="/cuerpo" element={<Cuerpo/>} />
        <Route path="/editarperfil" element={<Editarusuario />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/rutinasusuario" element={<Rutinasusuario/>} />
        
        <Route path="/admdiscapacidad" element={<AdmDiscapacidad/>} />
        <Route path="/admcuerpo" element={<AdmCuerpo/>} />
        <Route path="/admrutina" element={<AdmRutina/>} />
        <Route path="/admnotificaciones" element={<AdmNotificacion/>} />
      </Routes>
    </Router>
  );
}

export default App;