import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';
import '../Styles/DetalleProducto.css'
import {AiOutlineStar} from 'react-icons/ai'

export default function DetalleProductos() {
    const [producto, setProducto] = useState()
    const [isLoading, setLoading] = useState(true)

    const { idProducto } = useParams();
    useEffect(() => {
        axios.get('https://dummyjson.com/products/' + idProducto)
        .then(function (response) {
            setProducto(response.data)
            console.log(response.data)
        })
        .finally(() => setLoading(false))
    }, [])
    const calcularDescuento = ()  => {
        let precio = producto.price
        let discount = producto.discountPercentage
        const precioConDescuento = (Math.round(precio - (precio * discount/100)))
        return precioConDescuento
    }
    return (

        <div className='container'>
            {isLoading ? null : (
                <>
                <div className='box'>
                    <div >
                        <img src={producto.thumbnail} height="400px"alt='god'/>
                    </div>
                    <div>
                        <h1>{producto.title}</h1>
                        <h1>{producto.description}</h1>
                        <div className='precios'>
                            <h1 className='precioConDescuento'>  {producto.price} $</h1>
                            <h1>&nbsp;{calcularDescuento()}$</h1>
                        </div>
                        <div>
                            <h1>Rating: {producto.rating} <AiOutlineStar /></h1>
                        </div>
                        
                        <h1>Quedan: {producto.stock} Unidades</h1>
                    </div>
                </div>
                <div>
                    <h1>Otras imagenes</h1>
                    <div className='imagenes row-md-3'>
                        {Array.isArray(producto.images) &&
                            producto.images.length > 0 ? (
                            <>
                                <img className='imagen' src={producto.images[0]} width="400px"alt="imagenes"/>
                                <img className='imagen' src={producto.images[1]} width="400px" alt="imagenes"/>
                                <img className='imagen' src={producto.images[2]} width="400px"alt="imagenes"/>
                            </>
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                </div>
                </>
            )}
        </div>
    )
}