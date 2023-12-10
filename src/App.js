import Error from "containers/errors/Error";
import Home from "containers/pages/Home";
import store from "store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Categorias from "containers/pages/Categoria";
import SobreNosotros from "containers/pages/SobreNosotros";
import Contacto from "containers/pages/Contacto";
import Sucursales from "containers/pages/Sucursales";


function App() {
  return (
    <Provider store={store}>
   <Router>
    <Routes>
      <Route path="*" element={<Error/>}/>

      <Route path="/" element={<Home/>}/>
      <Route path="/Categorias" element={<Categorias/>}/>
      <Route path="/Sobre Nosotros" element={<SobreNosotros/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
      <Route path="/Sucursales" element={<Sucursales/>}/>

    </Routes>
   </Router>
   </Provider>
   
  );
}

export default App;
