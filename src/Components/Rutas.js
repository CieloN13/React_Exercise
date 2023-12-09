import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./Header";
import Cuerpo from "./Cuerpo";
import Atencionalcliente from "./AtencionC";
import Editarusuario from "./Editarusuario";
import Notificacion from "./Notificacion";


export default function RutasMenu(){
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Cuerpo/>}></Route>
                <Route exact path="/AtencionC" element={<Atencionalcliente/>}></Route>
                <Route exact path="/Notificacion" element={<Notificacion/>}></Route>
                <Route exact path="/EditarPerfil" element={<Editarusuario/>}></Route>

            </Routes>
        </Router>


    )
}