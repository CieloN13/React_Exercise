import { Link } from 'react-router-dom';



import '../IMG/ExercisePD.png';
import '../Stiles/Registro.css';
import ExercisePD from '../IMG/ExercisePD.png';
import { useState } from 'react';

export default function Registro(){
    const [nombre, setNombre] = useState('');
    const [nombre2, setNombre2] = useState('');
    const [apellido1, setApellido1] = useState('');
    const [apellido2, setApellido2] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('t.i');
    const [numeroDocumento, setNumeroDocumento] = useState(0);
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmarContrasena, setConfirmarContrasena] = useState('');
    const [tipoDocumentoINT,setTipoDocumentoINT]= useState(0)

    const [errorNombre, setErrorNombre] = useState('');
    const [errorNombre2, setErrorNombre2] = useState('');
    const [errorApellido1, setErrorApellido1] = useState('');
    const [errorApellido2, setErrorApellido2] = useState('');
    const [errorTipoDocumento, setErrorTipoDocumento] = useState('');
    const [errorNumeroDocumento, setErrorNumeroDocumento] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorContrasena, setErrorContrasena] = useState('');
    const [errorConfirmarContrasena, setErrorConfirmarContrasena] = useState('');
    
    const handleSubmit = async(event) => {
        event.preventDefault();
        //para validar el nombre
        if (nombre.trim() === '') {
          setErrorNombre('Por favor ingrese su nombre');
          return;
        } else {
          setErrorNombre('');
        }
        if (nombre2.trim() === '') {
            setErrorNombre2('Por favor ingrese el segundo nombre');
            return;
          } else {
            setErrorNombre2('');
        }
        //Validaciones Apellidos
        if (apellido1.trim() === '') {
            setErrorApellido1('Por favor ingrese el primer apellido');
            return;
          } else {
            setErrorApellido1('');
        }
        if (apellido2.trim() === '') {
            setErrorApellido2('Por favor ingrese el segundo apellido');
            return;
          } else {
            setErrorApellido2('');
        }
        //Validacion tipo de documento
        if (parseInt(tipoDocumento, 10) === 0) {
            setErrorTipoDocumento('Por favor seleccione un tipo de documento');
            return;
          } else {
            setErrorTipoDocumento('');
          }
        //VAlidacion Documento
        if (numeroDocumento.trim() === 0) {
            setErrorNumeroDocumento('Por favor ingrese el número de documento');
            return;
          } else if (!/^\d+$/.test(numeroDocumento)) {
            setErrorNumeroDocumento('El número de documento debe contener solo números');
            return;
          } else {
            setErrorNumeroDocumento('');
        }
        // Validación del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.trim() === '') {
        setErrorEmail('Por favor ingrese su correo electrónico');
        return;
        } else if (!emailRegex.test(email)) {
        setErrorEmail('Ingrese un correo electrónico válido');
        return;
        } else {
        setErrorEmail('');
        }
        //Validacion Contraseña
        if (contrasena.length < 8) {
            setErrorContrasena('La contraseña debe tener al menos 8 caracteres');
            return;
          } else {
            setErrorContrasena('');
        }
        if (confirmarContrasena !== contrasena) {
            setErrorConfirmarContrasena('Las contraseñas no coinciden');
            return;
          } else {
            setErrorConfirmarContrasena('');
        }
        console.log('Formulario validado, listo para registrar');
        //enviar datos
        const idDocumentoInt = parseInt(numeroDocumento, 10);
        console.log({
            idDocumento: idDocumentoInt,
            Nombre1: nombre,
            Nombre2: nombre2,
            Apellido1: apellido1,
            Apellido2: apellido2,
            CorreoElectronico: email,
            Direccion: "none",
            RolUsuario_idRolUsuarioNombre: 1,
            TipodeDocumento_idTipodeDocumento: tipoDocumentoINT,
            Contraseña: confirmarContrasena
            // Agrega los demás campos del formulario aquí...
        });
        if (tipoDocumento==="c.c"){
                setTipoDocumentoINT(1)
        }
        if (tipoDocumento==="c.e"){
                setTipoDocumentoINT(2)
        }
        if (tipoDocumento==="t.i"){
                setTipoDocumentoINT(3)
        }
        const formData = new FormData();
        formData.append('idDocumento', idDocumentoInt);
        formData.append('Nombre1', nombre);
        formData.append('Nombre2', nombre2);
        formData.append('Apellido1', apellido1);
        formData.append('Apellido2', apellido2);
        formData.append('CorreoElectronico', email);
        formData.append('Direccion', 'none');
        formData.append('RolUsuario_idRolUsuarioNombre', 1);
        formData.append('TipodeDocumento_idTipodeDocumento', tipoDocumentoINT);
        formData.append('Contraseña', confirmarContrasena);
        
        try {
            const response = await fetch('http://127.0.0.1:5000/usuarioregistrar', {
            method: 'POST',
            body: formData,
            });
          
            if (response.ok) {
                console.log('La solicitud fue exitosa');
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                  const data = await response.json();
                  alert(JSON.stringify(data));
                  //console.log('Datos recibidos:', data);
                  // Manejo de la respuesta JSON recibida
                } else {
                  console.log('Respuesta no es JSON');
                  // Manejo de la respuesta que no es JSON
                }
              } else {
                console.log('La solicitud falló con código:', response.status);
                // Manejo de otros códigos de estado
              }
            } catch (error) {
              console.error('Error en la solicitud:', error);
              // Manejo de errores
            }

    };
    return(
        <div className='RegistroContenedorp'>
            <div id="Registroregistro">
                <header id="Registrotexto">
                <h3>
                    Formulario de registro <img id="Registrologo" src={ExercisePD} alt="Logo de registro" />
                </h3>
                </header>

                <form onSubmit={handleSubmit}>
                {/* Inputs y otros elementos del formulario */}
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorNombre}</span>
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Nombre 2"
                    value={nombre2}
                    onChange={(e) => setNombre2(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorNombre2}</span>
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Apellido 1"
                    value={apellido1}
                    onChange={(e) => setApellido1(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorApellido1}</span>
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Apellido 2"
                    value={apellido2}
                    onChange={(e) => setApellido2(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorApellido2}</span>
                <select

                    className="Registrotexto"
                    value={tipoDocumento}
                    onChange={(e) => setTipoDocumento(e.target.value)}
                    required
                >
                    <option value="">Seleccionar tipo de documento</option>
                    <option value="t.i">Tarjeta de Identidad</option>
                    <option value="c.c">Cedula de Ciudadania</option>
                    <option value="c.e">Cedula de Extranjeria</option>
                </select>
                <span style={{ color: 'red' }}>{errorTipoDocumento}</span>
                <input
                    type="number"
                    className="Registrotexto"
                    placeholder="Numero de Documento"
                    value={numeroDocumento}
                    onChange={(e) => setNumeroDocumento(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorNumeroDocumento}</span>
                <input
                    type="email"
                    className="Registrotexto"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorEmail}</span>
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorContrasena}</span>
                <input
                    type="text"
                    className="Registrotexto"
                    placeholder="Repetir Contraseña"
                    value={confirmarContrasena}
                    onChange={(e) => setConfirmarContrasena(e.target.value)}
                    required
                />
                <span style={{ color: 'red' }}>{errorConfirmarContrasena}</span>



                <input type="submit" id="Registroregistrar" value="Registrarme" />
                <Link to="/" id="Registroterminos">¿Ya tienes cuenta?</Link>
                </form>
            </div>
         </div>
    )
}