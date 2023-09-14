import '../Styles/Carrito.css'
import { CarritoContext } from '../Context/carritoContext';
import { useContext } from 'react';
import ProductoCarrito from '../Components/ProductoCarrito';
export default function Carrito() {
    const ObjetoCarrito = useContext(CarritoContext)

    return (
        <div className='box2'>
            <h1>Carrito</h1>
            <div className="containerProductos">
                <ProductoCarrito ObjetoCarrito={ObjetoCarrito}></ProductoCarrito>
            </div>
        </div>
    )
}