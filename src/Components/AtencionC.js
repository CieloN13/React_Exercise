import '../Stiles/AtencionC.css';
<<<<<<< HEAD
import Header from './Header';
import Piedepagina from './footer';
export default function Recomendaciones(){
    return(
        <>
        <Header/>
         <article id="cuerpoAtencionC">
=======
export default function Atencionalcliente(){
    return(
        <article id="cuerpoAtencionC">
>>>>>>> ysus
            <h1>Atencion al cliente</h1>
            <h2>(Quejas, reclamos y/o sugerencias)</h2>
            <h3>Si desea comunicarse con el asesor y necesita preguntar algo referente a la pagina web puede escribirlo en el siguiente cuadro</h3>

            <div className="chat">xd</div>
            <section>
                <input type="text" id="Barra"/>
                <input type="submit" value="Enviar" className="enviar"/>
            </section>

            <h5>En un momento se comunicaran con ud</h5>
        </article>
<<<<<<< HEAD
        <Piedepagina/>
        </>
       
=======
>>>>>>> ysus
    )
}