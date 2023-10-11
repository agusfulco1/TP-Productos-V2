import { propTypes } from 'react-bootstrap/esm/Image'
import { useState } from 'react'
import '../Styles/Carrito.css'
import PropTypes from 'prop-types'
export default function ProductoCarrito(ObjetoCarrito) {
    const [count, setCount] = useState(1)

    const restar = () => {
        if (count > 1) {
            setCount(count => count - 1)
        }   
    }

    const sumar = () => {
        setCount(count => count + 1)
    }

    const calcularPrecio = () => {
        let precio = ObjetoCarrito.ObjetoCarrito.price
        let precioPorCarrito = precio * count
        return precioPorCarrito
    }
    return (
        <div className="containerCarrito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={ObjetoCarrito.ObjetoCarrito.thumbnail} className="imagenProducto" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-6 textoCarrito'>
                    <h2>{ObjetoCarrito.ObjetoCarrito.title}</h2>
                </div>
                <div className='col-md-2 count'>
                        <button onClick={sumar}>+</button>
                        <h1>{count}</h1>
                        <button onClick={restar}>-</button>
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