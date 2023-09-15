import '../Styles/Carrito.css'
export default function ProductoCarrito(ObjetoCarrito) {
    return (
        <div className="containerCarrito">
            <div className='containerImagen'>
                <img src={ObjetoCarrito.ObjetoCarrito.thumbnail} className="imagenProducto" alt='no hay imagen'></img>
            </div>

                <h2>{ObjetoCarrito.ObjetoCarrito.title}</h2>

        </div>
    )
}