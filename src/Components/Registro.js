import '../IMG/ExercisePD.png';
import '../Stiles/Registro.css';
import ExercisePD from '../IMG/ExercisePD.png';
export default function Registro(){
    return(
        <div className='RegistroContenedorp'>
            <div id="Registroregistro">

                <header id="Registrotexto">
                    <h3>Formulario de registro   <img id="Registrologo" src={ExercisePD} /></h3>
                </header>
            
                <input type="text" className="Registrotexto"  placeholder="Nombre" required/>
                <input type="text" className="Registrotexto" placeholder="Nombre 2"required/>
                <input type="text" className="Registrotexto" placeholder="Apellido 1"required/>
                <input type="text" className="Registrotexto" placeholder="Apellido 2"required/>

                <select className="Registrotexto">
                    <option value="t.i">Tarjeta de Identidad</option>
                    <option value="c.c">Cedula de Ciudadania</option>
                    <option value="c.e">Cedula de Extranjeria</option>
                </select>
                
                <input type="number" className="Registrotexto" placeholder="Numero de Documento"required/>
                <input type="email" className="Registrotexto" placeholder="Correo Electronico "required/>
                <input type="password" className="Registrotexto" placeholder="Contraseña"required/>
                <input type="password" className="Registrotexto" placeholder="Repetir Contraseña"required/>
                <label id="Registroterminos"required><input type="checkbox"  />Acepto terminos y condiciones</label>
                <input type="submit" id="Registroregistrar" value="Registrarme"/>
                <a href="login.html" id="Registroterminos">¿Ya tienes cuenta?</a>
                
            </div>
        </div>
    )
}