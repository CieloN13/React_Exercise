import React from 'react';
import '../Stiles/AdmAgente.css';
import agentesoporte from '../IMG/agentesoporte.png';
export default function AdmAgente(){
    return(
        <div id="AdmAgentecontenedorp">
                <div id="AdmAgenteregistro">
                    <header id="AdmAgentetexto">
                        <h3>Registrar Agente de Soporte <img src={agentesoporte}  alt="image" width="33%"/></h3>
                    </header>
                 
                    <input type="text" className="AdmAgentetexto"  placeholder="Nombre 1" required/>
                    <input type="text" className="AdmAgentetexto" placeholder="Nombre 2"required/>
                    <input type="text" className="AdmAgentetexto" placeholder="Apellido 1"required/>
                    <input type="text" className="AdmAgentetexto" placeholder="Apellido 2"required/>
                    <select class="AdmAgentetexto">
                        <option value="c.c">Cedula de Ciudadania</option>
                        <option value="c.e">Cedula de Extranjeria</option>
                    </select>
                    <input type="number" className="AdmAgentetexto" placeholder="Numero de Documento"required/>
                    <input type="email" className="AdmAgentetexto" placeholder="Correo Electronico "required/>
                    <input type="direccion" className="AdmAgentetexto" placeholder="Direccion"required/>
                    <input type="password" className="AdmAgentetexto" placeholder="Contraseña"required/>
                    <input type="password" className="AdmAgentetexto" placeholder="Repetir Contraseña"required/>
                    <input type="submit" id="registrar" value="Registrar Agente de Soporte"/>
                   
                </div>
            </div>
    )}