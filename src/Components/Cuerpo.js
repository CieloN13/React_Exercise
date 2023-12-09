import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../Stiles/Cuerpo.css';


import Header from './Header';
import Piedepagina from './footer';

export default function Cuerpo(){
    
  const [discapacidades, setDiscapacidades] = useState([]);
  const [filtro, setFiltro] = useState('');
  const [filteredDiscapacidades, setFilteredDiscapacidades] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/obtener_discapacidades')
      .then(response => {
        setDiscapacidades(response.data.discapacidades);
        setFilteredDiscapacidades(response.data.discapacidades); // Inicialmente, mostrar todas las discapacidades
      })
      .catch(error => {
        console.error('Error al obtener las discapacidades:', error);
      });
  }, []);

  const handleFiltroChange = event => {
    const value = event.target.value.toLowerCase();
    setFiltro(value);
    const filtered = discapacidades.filter(discapacidad =>
      discapacidad.nombre.toLowerCase().includes(value)
    );
    setFilteredDiscapacidades(filtered);
  };
       
    return(
      <>
        <Header/>
        
        <div id="cuerpo">
          <div id="buscador1">
            <input
              type="text"
              placeholder="Buscar discapacidad"
              value={filtro}
              onChange={handleFiltroChange}
            />
          </div>
          
          <ul>
            {filteredDiscapacidades.map((discapacidad, index) => (
              <li key={index}>
                <div>
                  <h2>
                    <Link to={`/discapacidad/${discapacidad.idDiscapacidad}`}>{discapacidad.nombre}</Link>
                  </h2>
                  <Link to={`/discapacidad/${discapacidad.idDiscapacidad}`}>
                    <img src={discapacidad.imagen} alt={discapacidad.nombre} />
                  </Link>
                  <p>{discapacidad.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Piedepagina/>
      </>
        
    )
} 

 /*<div id="cuerpo"><div>
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
              
          </div>*/
  
