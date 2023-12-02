import React from 'react';
import '../Stiles/AdmNotificacion.css';
import campana from '../IMG/campana.png';
export default function AdmNotificacion(){
    return(
        <article id="Admnotificacioncuerpo">
                <div class="Admnotificacioncontenedorp">
                    <header id="Admnotificaciontexto">
                        <h3>Crear Nueva Notificacion<img src={campana}  alt="image" width="33%"/></h3>
                    </header>
                    <p><b>Nombre de la Notificacion</b></p>
                    <input className="AdmnotificacionNombre" type="text" placeholder="Nombre"/>
                    <p><b>Fecha de la Notificacion</b></p>
                    <input className="AdmnotificacionNombre" type="date" placeholder="Fecha"/>
                    <p><b>Mensaje</b></p>
                    <input className="Admnotificaciondescripcion" type="text" placeholder="Descripcion"/>
                    <input type="button" id="Admnotificacionregistrar" value="Enviar notificacion"/>
                </div>
            </article>
    )
}