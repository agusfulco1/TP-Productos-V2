import '../Styles/Carrito.css'
import { CarritoContext } from '../Context/carritoContext';
import { useContext, useEffect, useState } from 'react';
import ProductoCarrito from '../Components/ProductoCarrito';
export default function Carrito() {
    const [Carrito, setCarrito] = useState([])
    useEffect(() => {
        setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, [])
    
    return (
        <>
        <div className='box2'>
            <h2>Carrito</h2>
            {Carrito == null ? <h1>No hay productos en el carrito</h1> : (
                <div className="containerProductos">
                    {Carrito.map((element) => {
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