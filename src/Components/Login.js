import React, { useState } from 'react';
import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ExercisePD from '../IMG/ExercisePD.png';
import '../Stiles/Login.css';

export default function Login({ handleLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Simulación de inicio de sesión exitosa si los campos no están vacíos
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
      handleLogin(); // Llama a la función handleLogin pasada como prop
    } else {
      // Manejar el caso en el que la validación falla
      console.log('Por favor ingresa usuario y contraseña válidos');
      // Puedes mostrar un mensaje de error al usuario o realizar otras acciones
    }
  };

  if (isLoggedIn) {
    return (
     
        <Navigate to="/" />
      
    );
  }

  return (
    <body>
      {/* Contenido del formulario de inicio de sesión */}
      <center><img className="foto1" src={ExercisePD} height="100px" /></center>
      <section className="form-register">
        <h4> ¡HOLA DE NUEVO!</h4>
        <input
          className="cuadro"
          type="text"
          name="documento"
          id="documento"
          placeholder="Ingrese su Documento"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="cuadro"
          type="password"
          name="contraseña"
          id="contraseña"
          placeholder="Ingrese su contraseña"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a ><input className="ingresar" type="button" value="Ingresar" onClick={handleSignIn} /></a>
        <p><Link to="/registro" id="registrarse">Registrarse</Link></p>
      </section>
    </body>
  );
}