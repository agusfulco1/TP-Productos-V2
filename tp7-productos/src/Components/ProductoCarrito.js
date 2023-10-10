import { propTypes } from 'react-bootstrap/esm/Image'
import { useState } from 'react'
import '../Styles/Carrito.css'
import PropTypes from 'prop-types'
export default function ProductoCarrito(ObjetoCarrito) {
    const [timer, setTimer] = useState()

    const restar = () => {
        setTimer(timer - 1)
    }
    const sumar = () => {
        setTimer(timer + 1)
    }
    return (
        <div className="containerCarrito">
            <div className='row'>
                <div className='col-md-2'>
                    <div className='containerImagen'>
                        <img src={ObjetoCarrito.ObjetoCarrito.thumbnail} className="imagenProducto" alt='no hay imagen'></img>
                    </div>
                </div>
                <div className='col-md-7 textoCarrito'>
                    <h2>{ObjetoCarrito.ObjetoCarrito.title}</h2>
                    <div>
                        <button onClick={sumar()}>+</button>
                        <h1>{timer}</h1>
                        <button onClick={restar()}>-</button>
                    </div>
                    
                </div>
                <div className='col-md-3 textoCarrito'>
                    <h2>{ObjetoCarrito.ObjetoCarrito.price}$</h2>
                </div>
            </div>
            
        </div>
    )
}

ProductoCarrito.propTypes = {
    ObjetoCarrito: PropTypes.object
}