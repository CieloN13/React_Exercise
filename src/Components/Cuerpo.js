import '../Stiles/Cuerpo.css';
import epilepsia from '../IMG/epilepsia.png';
import silladeruedas from '../IMG/silladeruedas.png';
import trollface from '../IMG/trollface.png';
import distrofia from '../IMG/distrofia.png';
export default function Cuerpo(){
    return(
        <div id="cuerpo">
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
    )
} 

