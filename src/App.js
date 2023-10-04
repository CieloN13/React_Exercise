

import Piedepagina from './Components/footer';
import './Stiles/Header.css'
import RutasMenu from './Components/Rutas';
import RutasAdmMenu from './Components/AdmRutas';
import Registro from './Components/Registro';
import Login from './Components/Login'

function App() {
  return (
    <div id="container">
      
      <RutasMenu/>
      <Piedepagina/>
      <RutasAdmMenu/>
      <Registro/>
      <Login/>
      
       

      
    </div>
  );
}

export default App;
