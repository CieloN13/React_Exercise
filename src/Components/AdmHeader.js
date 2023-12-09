import React from 'react';
import '../Stiles/AdmHeader.css';
import casita from '../IMG/casita.png';
import usuario from '../IMG/usuario.png';
import {NavLink} from 'react-router-dom';

export default function AdmHeader(){
    return(
        <header id="AdmHeadercabecera">

<<<<<<< HEAD
            <NavLink to="/admcuerpo" className=".AdmHeaderimgcasa"><img src={casita}  alt="image" width="33%"/></NavLink>
=======
            <NavLink to="/" className=".AdmHeaderimgcasa"><img src={casita}  alt="image" width="33%"/></NavLink>
>>>>>>> ysus
            <div className="hamburguesa1">
                <nav className="hamburguesa">
                    <input type="checkbox" id="menu"/>
                    <label for="menu"> ☰ </label>
                    <ul>
                        <a href="login.html">Cerrar Sesion</a>
                    </ul>
                </nav>
            </div>
            <NavLink to="/EditarPerfil" className="AdmHeaderusuario"><img src={usuario}  alt="image" width="33%"/></NavLink>
        </header>
        );
}