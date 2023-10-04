import React from 'react';
import '../Stiles/AdmDiscapacidad.css';
import ExercisePD from '../IMG/ExercisePD.png';

export default function AdmDiscapacidad(){
    return(
        <article id="AdmDiscapacidadcuerpo">  
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

        </article>
    )
}