import React from 'react';
import '../Stiles/AdmRutina.css';
import Rutina from '../IMG/Rutina.png';
<<<<<<< HEAD
import AdmHeader from './AdmHeader';
export default function AdmRutina(){
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('Nombre_Ejercicio', event.target.Nombre_Ejercicio.value);
        formData.append('Descripcion', event.target.Descripcion.value);
        formData.append('DuracionMin', event.target.DuracionMin.value);
        formData.append('Series', event.target.Series.value);
        formData.append('RepeticionesPorSerie', event.target.RepeticionesPorSerie.value);
        formData.append('Imagen1', event.target.Imagen1.files[0]);
        formData.append('Imagen2', event.target.Imagen2.files[0]);
        formData.append('Imagen3', event.target.Imagen3.files[0]);
        formData.append('Discapacidad_idDiscapacidad', event.target.Discapacidad_idDiscapacidad.value); 
        try {
            const response = await fetch('http://127.0.0.1:5000/registrar_rutina', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Hacer algo con la respuesta
            } else {
                throw new Error('Error al registrar rutina xd');
            }
        } catch (error) {
            console.error(error);
            // Manejar el error, mostrar un mensaje al usuario, etc.
        }
    };
    return(

        <>
            <AdmHeader />
            <article id="Admrutinacuerpo">
                <div id="Admrutinaregistro">
                    <form onSubmit={handleSubmit}>
                        <header id="Admrutinatexto">
                            <h3>Agregar Rutina<img src={Rutina} alt="image" width="33%" /></h3>
                        </header>
                        <p>Nombre Ejercicio</p>
                        <input type="text" name="Nombre_Ejercicio" className="Admrutinatexto" placeholder="Nombre ejercicio" required />
                        <p>Descripcion del ejercicio</p>
                        <input type="text" name="Descripcion" className="Admrutinadescripcion" placeholder="Descripcion" required />
                        <p>Duracion</p>
                        <input type="int" name="DuracionMin" className="Admrutinatexto" placeholder="Duracion"required/>
                        <p>Series</p>
                        <input type="int"  name="Series" className="Admrutinatexto" placeholder="Series"required/>
                        <p>Repeticiones por Serie </p>
                        <input type="int" name="RepeticionesPorSerie" className="Admrutinatexto" placeholder="Repeticiones por serie"required/>
                        <p>Inserte la imagen 1</p>
                        <input type="file" name="Imagen1" className="Admrutinaimagenes" />
                        <p>Inserte la imagen 2</p>
                        <input type="file" name="Imagen2" className="Admrutinaimagenes" />
                        <p>Inserte la imagen 3</p>
                        <input type="file" name="Imagen3" className="Admrutinaimagenes" />
                        <p>Discapacidad id</p>
                        <input type="int" name="Discapacidad_idDiscapacidad" className="Admrutinatexto" placeholder="ID Discapacidad"required/>

                        <input type="submit" id="Admrutinaregistrar" value="Agregar Rutina" />
                    </form>
                </div>
            </article>
        </>
        
=======
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
>>>>>>> ysus
    )
}