import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import Card from 'react-bootstrap/Card';
import PropTypes  from 'prop-types';
import {AiFillCheckCircle} from 'react-icons/ai'
import { IconContext } from "react-icons";
import { CarritoContext } from '../Context/carritoContext';
import { useContext } from 'react';
export default function Producto(props) {

    const ObjetoCarrito = useContext(CarritoContext)
    let productoCarrito
    const verificarSiEstaEnCarrito = () => {
        console.log(ObjetoCarrito.carrito.length)
        if (ObjetoCarrito.carrito.length > 0){
            productoCarrito = ObjetoCarrito.carrito.find((product) => product.id === props.producto.id)
            if (productoCarrito === undefined) {
                return false
            } else {
                return true
            }
        }
    }    
    return (
        <Card className='producto' style={{ width: "18rem" }} key={props.producto.id}>
            {props.producto.thumbnail == null ? <h1>No hay imagen</h1> : <Card.Img variant="top" src={props.producto.thumbnail} style={{ height: "150px" }} />}
            <Card.Body>
                <Card.Title>{props.producto.title}</Card.Title>
                <Card.Text className='precios'>
                    <h1 className='precioConDescuento'>{props.producto.price}$</h1>
                    <h1>&nbsp;{props.calcularDescuento(props.producto)}$</h1>
                </Card.Text>
                <Link to={'/Detalle/' + props.producto.id} className="btn btn-primary boton">Ver Mas</Link>
                {ObjetoCarrito.carrito.length > 0 ? verificarSiEstaEnCarrito() ? (
                    <IconContext.Provider value={{color: "green", size: 40, className: "check"}}>
                        <AiFillCheckCircle />
                    </IconContext.Provider>
                ) : null : null} 
                
                
            </Card.Body>
        </Card>
    )
}

Producto.propTypes = {
    id: PropTypes.number,
    imagen: PropTypes.string,
    titulo: PropTypes.string,
    precio: PropTypes.number,
    calcularDescuento: PropTypes.func,
    producto: PropTypes.object,
}
