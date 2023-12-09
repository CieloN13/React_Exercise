import React from 'react';
import '../Stiles/AdmDiscapacidad.css';
import ExercisePD from '../IMG/ExercisePD.png';
<<<<<<< HEAD
import { useState,useEffect } from 'react';
import AdmHeader from './AdmHeader';

export default function AdmDiscapacidad(){
    
                     /*       
        <article id="AdmDiscapacidadcuerpo">  
    
=======

export default function AdmDiscapacidad(){
    return(
        <article id="AdmDiscapacidadcuerpo">  
>>>>>>> ysus
            <div className="AdmDiscapacidadcontenedorp">
                <header id="AdmDiscapacidadtexto">
                    <h3>Agregar Nueva Discapacidad<img src={ExercisePD} className='discapacidad' alt="image" width="33%"/></h3>
                </header>
                <p><b>Nombre de la Discapacidad</b></p>
                <input className="AdmDiscapacidadNombre" type="text" placeholder="Nombre"/>
                <p><b>Descripcion</b></p>
                <input className="AdmDiscapacidaddescripcion" type="text" placeholder="Descripcion"/>
                <p><b>Adjunte las imagenes</b></p>
                <input type="file" className="AdmDiscapacidadimagenes" placeholder="Inserte las imagenes"/>
                <input type="button" id="registrar" value="Agregar Discapacidad"/>

            </div>
<<<<<<< HEAD
            
        </article>
        */
        const [nombre, setNombre] = useState('');
        const [descripcion, setDescripcion] = useState('');
        const [imagen, setImagen] = useState(null);
        const [mensajeExitoso, setMensajeExitoso] = useState(false);

        const handleNombreChange = (event) => {
          setNombre(event.target.value);
        };
      
        const handleDescripcionChange = (event) => {
          setDescripcion(event.target.value);
        };
      
        const handleImagenChange = (event) => {
          // Almacenar el archivo de imagen seleccionado
          setImagen(event.target.files[0]);
        };
      
        const handleSubmit = async (event) => {
          event.preventDefault();
      
          const formData = new FormData();
          formData.append('Nombre', nombre);
          formData.append('Descripcion', descripcion);
          formData.append('Imagen', imagen);
      
          try {
            const response = await fetch('http://127.0.0.1:5000/discapacidad', {
              method: 'POST',
              body: formData,
            });
            
            if (!response.ok) {
              throw new Error(`Error al enviar los datos. Código de estado: ${response.status}`);
            }
          
            const data = await response.json();
            console.log('Respuesta del servidor:', data);
            // Manejo de la respuesta del servidor
          } catch (error) {
            console.error('Error en la solicitud:', error);
            // Manejo de errores
          }
        };
        const mostrarMensaje = () => {
            if (mensajeExitoso) {
              const mensaje = document.getElementById('mensaje-exitoso');
              mensaje.style.display = 'block';
        
              setTimeout(() => {
                mensaje.style.display = 'none';
              }, 3000); // Ocultar el mensaje después de 3 segundos
            }
          };
        useEffect(() => {
            mostrarMensaje();
          }, [mensajeExitoso]);
        return (
          <><AdmHeader/>
          <article id="AdmDiscapacidadcuerpo">
                <div className="AdmDiscapacidadcontenedorp">
                    <header id="AdmDiscapacidadtexto">
                        <h3>Agregar Nueva Discapacidad<img src={ExercisePD} className='discapacidad' alt="image" width="33%"/></h3>
                    </header>
                    <p id="mensaje-exitoso" style={{ display: 'none' }}>¡Registro exitoso!</p>
                    <form onSubmit={handleSubmit} id='form'>
                        
                        <p><b>Nombre de la Discapacidad</b></p>
                        <input className="AdmDiscapacidadNombre" type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre"/>
                        
                        
                        <p><b>Descripción</b></p>
                        <input className="AdmDiscapacidaddescripcion" type="text" value={descripcion} onChange={handleDescripcionChange} placeholder="Descripción"/>
                        
                        <p><b>Adjunte las imágenes</b></p>
                        <input type="file" className="AdmDiscapacidadimagenes" accept="image/*" onChange={handleImagenChange} placeholder="Inserte las imágenes"/>
                        
                        <input type="submit" id="registrar" value="Agregar Discapacidad"/>
                    </form>
                </div>
            </article>
          </>
            
                
        );
    
=======

        </article>
    )
>>>>>>> ysus
}