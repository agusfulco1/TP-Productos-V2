import './App.css';
import Navbar from './Components/Navbar'
import Home from './Screens/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from './Screens/Productos';
import DetalleProductos from './Screens/DetalleProductos'
import Contacto from './Screens/Contacto';
import Footer from './Components/footer'
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<><Navbar></Navbar><Footer></Footer></>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/productos" element={<Productos></Productos>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/Detalle/:idProducto" element={<DetalleProductos></DetalleProductos>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
