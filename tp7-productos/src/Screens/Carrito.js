import '../Styles/Carrito.css'
import { CarritoContext } from '../Context/carritoContext';
import { useContext, useEffect, useState } from 'react';
import ProductoCarrito from '../Components/ProductoCarrito';
export default function Carrito() {

    const ObjetoCarrito = useContext(CarritoContext)

    useEffect(() => {
        console.log(ObjetoCarrito.carrito)
        ObjetoCarrito.setCarrito(JSON.parse(localStorage.getItem("carrito")))
    }, [])
    
    return (
        <>
        <div className='box2'>
            <h2>Carrito</h2>
            {ObjetoCarrito.carrito == null ? <h1>No hay productos en el carrito</h1> : (
                <div className="containerProductos">
                    {ObjetoCarrito.carrito.map((element) => {
                        console.log(element)
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