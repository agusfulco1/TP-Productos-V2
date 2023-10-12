import '../Styles/Carrito.css'
import { CarritoContext } from '../Context/carritoContext';
import { useContext, useEffect, useState } from 'react';
import ProductoCarrito from '../Components/ProductoCarrito';
export default function Carrito() {

    const ObjetoCarrito = useContext(CarritoContext)

    useEffect(() => {
        ObjetoCarrito.setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, [])
    
    return (
        <>
        <div className='box2'>
            <h2>Carrito</h2>
            {Carrito == null ? <h1>No hay productos en el carrito</h1> : (
                <div className="containerProductos">
                    {ObjetoCarrito.carrito.map((element) => {
                        return (
                            <>
                            <ProductoCarrito producto={element} ></ProductoCarrito>
                            </>
                            
                        )
                    })}
                </div>
            )}
        </div>
        </>
        
    )
}