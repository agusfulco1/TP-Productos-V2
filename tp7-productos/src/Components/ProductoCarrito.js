import { propTypes } from 'react-bootstrap/esm/Image'
import { useState, useContext } from 'react'
import '../Styles/Carrito.css'
import PropTypes from 'prop-types'
import { CarritoContext } from '../Context/carritoContext';
export default function ProductoCarrito(producto) {
    const ObjetoCarrito = useContext(CarritoContext)
    const restar = () => {
        if (producto.producto.cantidad > 1) {
            ObjetoCarrito.setCarrito(ObjetoCarrito.carrito.map((product) => {
                if (product.id === producto.producto.id) {
                    product.cantidad = product.cantidad - 1
                }
                return product
            }))
        }   
    }

    const sumar = () => {
        console.log(ObjetoCarrito)
        ObjetoCarrito.setCarrito(ObjetoCarrito.carrito.map((product) => {
            console.log(product)
            console.log(producto.producto)
            if (product.id === producto.producto.id) {
                product.cantidad = product.cantidad + 1
                console.log(product.cantidad)
            }
            return product
        }))
    }

    const calcularPrecio = () => {
        let precio = producto.producto.price
        let precioPorCarrito = precio * producto.producto.cantidad
        return precioPorCarrito
    }
    return (
        <div className="containerCarrito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={producto.producto.thumbnail} className="imagenProducto" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-6 textoCarrito'>
                    <h2>{producto.producto.title}</h2>
                </div>
                <div className='col-md-2 count'>
                        <button onClick={restar}>-</button>
                        <h1>{producto.producto.cantidad}</h1>
                        <button onClick={sumar}>+</button>
                </div>
                <div className='col-md-2 textoCarrito'>
                    <h2>{calcularPrecio()}$</h2>
                </div>
            </div>
            
        </div>
    )
}

ProductoCarrito.propTypes = {
    ObjetoCarrito: PropTypes.object
}