import React from 'react';
import '../Stiles/AdmRutina.css';
import Rutina from '../IMG/Rutina.png';
export default function AdmRutina(){
    return(
        <article id="Admrutinacuerpo">
                <div id="Admrutinaregistro">
                    <header id="Admrutinatexto">
                        <h3>Agregar Rutina<img src={Rutina} alt="image" width="33%"/></h3>
                    </header>
                    <p>Nombre Ejercicio</p>
                    <input type="text" className="Admrutinatexto" placeholder="Nombre ejercicio" required/>
                    <p>Descripcion del ejercicio</p>
                    <input type="text" className="Admrutinadescripcion"  placeholder="Descripcion" required/>
                    <p>Duracion</p>
                    <input type="text" className="Admrutinatexto" placeholder="Duracion"required/>
                    <p>Series</p>
                    <input type="text" className="Admrutinatexto" placeholder="Series"required/>
                    <p>Repeticiones por Serie </p>
                    <input type="text" className="Admrutinatexto" placeholder="Repeticiones por serie"required/>
                    <p>Inserte las imagenes</p>
                    <input type="file" className="Admrutinaimagenes"/>
                    <input type="button" id="Admrutinaregistrar" value="Agregar Rutina"/>
                </div>
            </article>
    )
}