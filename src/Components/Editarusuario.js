import '../Stiles/Editarusuario.css'
export default function Editarusuario(){
    return(
        <article id="Editarusuariocuerpo">
            <div id="Editarusuariotitulo">
                <h2>Editar Datos Personales</h2>
            </div>
            <input type="text" className="Editarusuariotexto" placeholder="Nombre" required/>
            <input type="text" className="Editarusuariotexto" placeholder="Nombre 2" required/>
            <input type="text" className="Editarusuariotexto" placeholder="Apellido 1" required/>
            <input type="text" className="Editarusuariotexto" placeholder="Apellido 2" required/>
            <input type="email" className="Editarusuariotexto" placeholder="Correo Electronico " required/>
            <input type="password" className="Editarusuariotexto" placeholder="Contraseña" required/>
            <input type="password" className="Editarusuariotexto" placeholder="Repetir Contraseña" required/>
            <input type="submit" id="registrar" value="Cambiar Datos"/>

        </article>

    )
}