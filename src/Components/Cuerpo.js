import React, { useState,useEffect } from 'react';
import axios from 'axios';

import '../Stiles/Cuerpo.css';
import epilepsia from '../IMG/epilepsia.png';
import silladeruedas from '../IMG/silladeruedas.png';
import trollface from '../IMG/trollface.png';
import distrofia from '../IMG/distrofia.png';

import Header from './Header';
import Piedepagina from './footer';

export default function Cuerpo(){
    
        const [discapacidades, setDiscapacidades] = useState([]);
      
        useEffect(() => {
          axios.get('http://127.0.0.1:5000/obtener_discapacidades') // Reemplaza con la URL correcta de tu API
            .then(response => {
              setDiscapacidades(response.data.discapacidades); // Establecer las discapacidades en el estado
            })
            .catch(error => {
              console.error('Error al obtener las discapacidades:', error);
            });
        }, []);

  
    return(
        <>
        <Header/>
        
        <div id="cuerpo"><div>
      <h1>Discapacidades</h1>
      <div className="discapacidades-container">
        {discapacidades.map(discapacidad => (
          <div key={discapacidad.idDiscapacidad} className="discapacidad-item">
            <h2>{discapacidad.nombre}</h2>
            <p>{discapacidad.descripcion}</p>
            <img src={discapacidad.imagen} alt={discapacidad.nombre} />
          </div>
        ))}
      </div>
    </div>
            <div id="buscador1"><input type="search" placeholder="Busca Aqui"/></div>
            <div id="Buscador-submit"><input type="submit" value="Buscar"/></div>
            <article>
                <a href="Discapacidad.html"><img src={epilepsia} alt="" width="80%"/></a>
                <h1>Epilepsia</h1>
            </article>
            <article id="imagenes">
                <a href="Discapacidad.html"><img src={silladeruedas} alt="" width="80%"/></a>
                <h1>Paraplejia</h1>
            </article>
            <article>
                <a href="Discapacidad.html"><img src={trollface} alt="" width="80%"/></a>
                <h1>Tetraplejia</h1>
            </article>
            <article>
                <a href="Discapacidad.html"><img src={distrofia} alt="" width="80%"/></a>
                <h1>Distrofia Muscular</h1>
            </article>
            
        </div>
        <Piedepagina/>
        </>
        
    )
} 

