import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarraNav from "../components/BarraNav/BarraNav";
import Cuenta from "../components/Cuenta/Cuenta";
import Footer from "../components/Footer/Footer";
import FormCliente from "../components/FormCliente/FormCliente";
import Login from "../components/Login/Login";
import Menu from '../components/Menu/Menu'
import Mesa from "../components/Mesa/Mesa";
import AboutUs from "../pages/AboutUs";
import Administracion from "../pages/Administracion";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthRoute from "./AuthRoute";
import PrivateRoute from "./PrivateRoute";


const RoutesApp = () => {

  return (
    <BrowserRouter>
      <BarraNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/contacto" element={<Contact />} />
        

        <Route path='/' element={<AuthRoute />}>
         <Route path="/login" element={<Login/>}/>
         <Route path="/registro" element={<FormCliente />}/>
        </Route>

        <Route path="/" element={<PrivateRoute />}>
        <Route path='/mesa' element={<Mesa/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/administracion" element={<Administracion />}/>
        <Route path="/cuenta" element={<Cuenta />}/>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
