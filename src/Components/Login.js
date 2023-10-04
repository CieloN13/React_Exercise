import ExercisePD from '../IMG/ExercisePD.png'
import '../Stiles/Login.css'
export default function Login(){
    return(
        <>
            
            <body> 
                <center><img className="foto1" src={ExercisePD} height="100px" /></center>
                
                <section className="form-register">
                    <h4> ¡HOLA DE NUEVO!</h4>	

                    <input className="cuadro" type="text" name="documento" id="documento" placeholder="Ingrese su Documento"required />

                    <input className="cuadro" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su contraseña"required />

                    <script src="JS/login.js"></script>
                    <a ><input className="ingresar" type="button"  value="Ingresar" onclick="login()"/></a>
                    <p> <a href="registro.html" id="registrarse"> ¿No tienes cuenta? </a></p>
                </section>
                <script src="../scripts/validacion_login.js"></script>
            </body>
        </>
    )
}