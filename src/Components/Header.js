import React from 'react';
import '../Stiles/Header.css';
import casita from '../IMG/casita.png';
import microfono from '../IMG/microfono.png';
import informe from '../IMG/informe.png';
import agentesoporte from '../IMG/agentesoporte.png';
import campana from '../IMG/campana.png';
import usuario from '../IMG/usuario.png';
import {NavLink} from 'react-router-dom';

export default function Header(){
    return(
    <header id="cabecera">
    <a  className="microfono"><img src={microfono} alt="image"/></a>

    <div className="imgcasa"><img src={casita} alt="image"/></div>
    <div className="boton1" ><NavLink className="botoninicio" to="/">INICIO</NavLink></div>


    <div className="imginforme"><img src={informe} alt="image"/></div>
    <div className="boton2"><NavLink className="botoninforme" to="/AtencionC">MIS RUTINAS</NavLink></div>


    <div className="imgagente"><img src={agentesoporte} alt="image"/></div>
    <div className="boton3"><NavLink className="botonagente" to="/AtencionC">AGENTE</NavLink></div>

    <NavLink to="/Notificacion" className="campana"><img src={campana} alt="image"/></NavLink>
      <div className="hamburguesa1">
          <nav className="hamburguesa">
            <input type="checkbox" id="menu"/>
            <label for="menu"> ☰ </label>
            <ul>
              <a href="login.html">Cerrar Sesion</a>
            </ul>
          </nav>
      </div>
    <NavLink to="/EditarPerfil" className="usuario"><img src={usuario}  alt="image" width="33%"/></NavLink>
  </header>);
}

