import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import AdmHeader from "./AdmHeader";
import AdmCuerpo from "./AdmCuerpo";
import AdmMensajes from "./AdmMensaje";
import AdmDiscapacidad from "./AdmDiscapacidad";
import AdmRutina from "./AdmRutina";
import AdmAgente from "./AdmAgente";
import AdmNotificacion from "./AdmNotificacion";
export default function RutasAdmMenu(){
    return(
        <Router>
            <AdmHeader/>
            <Routes>
            <Route exact path="/" element={<AdmCuerpo/>}></Route>
            <Route exact path="/MensajesAgente" element={<AdmMensajes/>}></Route>
            <Route exact path="/AñadirDiscapacidad" element={<AdmDiscapacidad/>}></Route>
            <Route exact path="/AñadirRutina" element={<AdmRutina/>}></Route>
            <Route exact path="/AgregarAgente" element={<AdmAgente/>}></Route>
            <Route exact path="/AgregarNotificaciones" element={<AdmNotificacion/>}></Route>
                

            </Routes>
        </Router>


    )
}