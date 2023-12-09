import React from 'react';
import '../Stiles/AdmNotificacion.css';
import campana from '../IMG/campana.png';
import AdmHeader from './AdmHeader';

export default function AdmNotificacion(){
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Nombre', event.target.Nombre.value);
        formData.append('Fecha', event.target.Fecha.value);
        formData.append('Descripcion', event.target.Descripcion.value);
        try {
            
            const response = await fetch('http://127.0.0.1:5000/subir_notificacion', {
                method: 'POST',
                body:formData,
            });

            if (response.ok) {
                
                const data = await response.json();
                console.log(data); // Hacer algo con la respuesta, si es necesario
            } else {
                throw new Error('Error al enviar la notificación');
            }
        } catch (error) {
            console.error(error);
            // Manejar el error, mostrar un mensaje al usuario, etc.
        }
    };
    return(
        <><AdmHeader/>
        <article id="Admnotificacioncuerpo">
                <div className="Admnotificacioncontenedorp">
                    <header id="Admnotificaciontexto">
                        <h3>Crear Nueva Notificación<img src={campana} alt="image" width="33%" /></h3>
                    </header>
                    <form onSubmit={handleSubmit} className="formulario-notificacion">
                        <p><b>Nombre de la Notificación</b></p>
                        <input type="text"   name='Nombre'className="AdmnotificacionNombre" placeholder="Nombre" required />
                        <p><b>Fecha de la Notificación</b></p>
                        <input type="date"  name='Fecha' className="AdmnotificacionNombre" placeholder="Fecha" required />
                        <p><b>Mensaje</b></p>
                        <input type="text"  name='Descripcion' className="Admnotificaciondescripcion" placeholder="Descripción" required />
                        <input type="submit" id="Admnotificacionregistrar" value="Enviar notificación" />
                    </form>
                </div>
            </article>
        </>
        
    )
}