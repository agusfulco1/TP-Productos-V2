import './App.css';
import Navbar from './Components/Navbar'
import Home from './Screens/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productos from './Screens/Productos';
import DetalleProductos from './Screens/DetalleProductos'
import Contacto from './Screens/Contacto';
import Footer from './Components/footer';
import Carrito from './Screens/Carrito';
import { CarritoContext } from './Context/carritoContext';
import { useState } from 'react';
function App() {
  const [carrito, setCarrito] = useState([]);
  const objetoCarrito = {carrito: carrito, setCarrito: setCarrito}
  return (
    <CarritoContext.Provider value={objetoCarrito}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar></Navbar><Footer></Footer></>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/productos" element={<Productos></Productos>}></Route>
            <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            <Route path="/Detalle/:idProducto" element={<DetalleProductos></DetalleProductos>}></Route>
            <Route path="/Carrito" element={<Carrito></Carrito>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoContext.Provider>  
  );
}

export default App;
