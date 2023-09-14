import '../Styles/Carrito.css'
export default function ProductoCarrito(ObjetoCarrito) {
    console.log(ObjetoCarrito.ObjetoCarrito.carrito)
    return (
        <div className="containerCarrito">
            <img src={ObjetoCarrito.ObjetoCarrito.carrito.thumbnail} className="imagenProducto"></img>
        </div>
    )
}