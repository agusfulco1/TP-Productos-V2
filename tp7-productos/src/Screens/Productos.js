import axios from 'axios'
import { useState } from 'react';
import '../Styles/Productos.css'
export default function Productos() {
    const [textoABuscar, setTextoABuscar] = useState('');
    const [listaProductos, setListaProductos] = useState('')
    const [productos, setProductos] = useState([])
    const handleKeyUp = (e) => {
        setTextoABuscar(e.target.value);
    }

    const BuscarProducto = () => {
        console.log()
        axios.get(`https://dummyjson.com/products/search?q=${textoABuscar}`)
            .then(function (response) {
                console.log(response.data.products)
                response.data.products.forEach(element => {
                    setProductos(
                        ...productos,
                        {
                            element
                        }
                    )
                    setListaProductos(productos)
                });
            })
            .finally(() => console.log(listaProductos))
    }
    return (
        <div>
            <header className="masthead">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                <h1 className="mb-5">Busque el producto que necesite!</h1>
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" onKeyUp={handleKeyUp} type="email" placeholder="Producto..." />
                                    </div>
                                    <div className="col-auto"><button className={'btn btn-primary btn-lg ' + (textoABuscar === '' ? 'disabled' : '')} onClick={BuscarProducto} type="submit">Buscar</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="row" id="listaProductos">
                {listaProductos.lenght > 0 ? (listaProductos.map((element) => {
                    return (
                    <div id="producto" className="card">
                        <img id="imagenProducto" src={productos.thumbnail} height="250px" width="auto" className="card-img-top" />
                        <div className="card-body">
                            <h5 id="tituloProducto" className="card-title">{productos.title}</h5>
                            <button id="botonVerMas" className="btn btn-success" /*onclick={verMas(productos.id)}*/ data-bs-toggle="modal" data-bs-target="#exampleModal">Ver mas</button>
                        </div>
                    </div>
                    )
                })  ) : null}
            </div>


            <div id="detalles">
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="tituloModal">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p id="descripcionModal"></p>
                                <p id="precioModal"></p>
                                <p id="ratingModal"></p>
                                <p id="stockModal"></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item"><a href="#!">About</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Contact</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy;Tiago Glusman - Agustin Fulco</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <a href="https://github.com/teglus133/TP3---JS"><i className="bi-github fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );


}