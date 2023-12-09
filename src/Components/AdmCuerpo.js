import React from 'react';
import '../Stiles/AdmCuerpo.css';
<<<<<<< HEAD
import ExercisePD from '../IMG/ExercisePD.png';
import Rutina from '../IMG/Rutina.png';
import campana from '../IMG/campana.png';
import {NavLink} from 'react-router-dom';
import AdmHeader from './AdmHeader';

export default function AdmCuerpo(){
    return(
        <><AdmHeader/>
        <article id="AdmCuerpocuerpo">
            <div>
            <NavLink to="/admdiscapacidad" className=".imgcasa"><img src={ExercisePD}  alt="image" width="33%"/></NavLink>
                <h1>Añadir Discapacidad</h1>
            </div>
            <div>
            <NavLink to="/admrutina" className=".imgcasa"><img src={Rutina}  alt="image" width="33%"/></NavLink>
                <h1>Añadir Rutina </h1>
            </div>
            <div>
            <NavLink to="/admnotificaciones" className=".imgcasa"><img src={campana}  alt="image" width="33%"/></NavLink>
=======
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
            <NavLink to="/MensajesAgente" className=".imgcasa"><img src={Mensaje}  alt="image" width="33%"/></NavLink>
                <h1>Mensajes Agente</h1>
            </div>
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
>>>>>>> ysus
                <h1>Agregar Notificaciones</h1>
            </div>

        </article>
<<<<<<< HEAD
        </>
        
=======
>>>>>>> ysus
    )
}