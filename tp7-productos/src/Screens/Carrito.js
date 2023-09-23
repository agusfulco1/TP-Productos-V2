import '../Styles/Carrito.css'
import { CarritoContext } from '../Context/carritoContext';
import { useContext } from 'react';
import ProductoCarrito from '../Components/ProductoCarrito';
export default function Carrito() {
    const ObjetoCarrito = useContext(CarritoContext)
    
    return (
        <>
        <div className='box2'>
            <h1>Carrito</h1>
            {!ObjetoCarrito.carrito.length ? <h1>No hay productos en el carrito</h1> : (
                <div className="containerProductos">
                    {ObjetoCarrito.carrito.map((element) => {
                        console.log(element)
                        return (
                            <>
                            <ProductoCarrito ObjetoCarrito={element}></ProductoCarrito>
                            </>
                            
                        )
                    })}
                </div>
            )}
            
        </div>
        </>
        
    )
}