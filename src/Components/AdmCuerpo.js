import React from 'react';
import '../Stiles/AdmCuerpo.css';
import Mensaje from '../IMG/Mensaje.png';
import ExercisePD from '../IMG/ExercisePD.png';
import Rutina from '../IMG/Rutina.png';
import agentesoporte from '../IMG/agentesoporte.png';
import campana from '../IMG/campana.png';
import {NavLink} from 'react-router-dom';

export default function AdmCuerpo(){
    return(
        <article id="AdmCuerpocuerpo">
            <div>
            <NavLink to="/AñadirDiscapacidad" className=".imgcasa"><img src={ExercisePD}  alt="image" width="33%"/></NavLink>
                <h1>Añadir Discapacidad</h1>
            </div>
            <div>
            <NavLink to="/AñadirRutina" className=".imgcasa"><img src={Rutina}  alt="image" width="33%"/></NavLink>
                <h1>Añadir Rutina </h1>
            </div>
            <div>
            <NavLink to="/AgregarAgente" className=".imgcasa"><img src={agentesoporte}  alt="image" width="33%"/></NavLink>
                <h1>Agregar Agente </h1>
            </div>
            <div>
            <NavLink to="/AgregarNotificaciones" className=".imgcasa"><img src={campana}  alt="image" width="33%"/></NavLink>
                <h1>Agregar Notificaciones</h1>
            </div>

        </article>
    )
}