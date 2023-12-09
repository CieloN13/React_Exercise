import React, { useState } from 'react';
import { Link,Navigate,useNavigate} from 'react-router-dom';
import axios from 'axios';



import ExercisePD from '../IMG/ExercisePD.png';
import '../Stiles/Login.css';

export default function Login({ setUserId }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Endpoint de tu API para validar el usuario
    const endpoint = 'http://127.0.0.1:5000/validar_usuario';

    try {
      const response = await axios.post(endpoint, {
        usuario: username,
        contraseña: password,
      });

      if (response.status === 200) {
        const data = response.data;
        if (data.idDocumento) {
          setUserId(data.idDocumento); // Establecer el ID del usuario en el estado

          // Redireccionar según el rol
          if (data.idRol === 1) {
            navigate('/ruta-para-usuario-de-rol-1');
          } else if (data.idRol === 3) {
            navigate('/ruta-para-usuario-de-rol-3');
          }
        } else {
          console.log('Error: No se recibió el ID del usuario');
        }
      } else {
        console.log('Error al autenticar el usuario');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

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
        {/* Usamos un botón en lugar de un enlace para mantener el estilo */}
        <button className="ingresar" onClick={handleSubmit}>Ingresar</button>
        <p><Link to="/registro" id="registrarse">Registrarse</Link></p>
      </section>
    </body>
  );
}