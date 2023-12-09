import React from 'react';
import '../Stiles/AdmCuerpo.css';
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
                <h1>Agregar Notificaciones</h1>
            </div>

        </article>
        </>
        
    )
}