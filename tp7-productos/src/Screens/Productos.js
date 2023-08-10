

export default function Productos() {
    const inputProducto = document.getElementById("producto");
    inputProducto.onkeyup = () => {
        if (inputProducto.value != "") {
            boton = document.getElementById("boton");
            boton.classList.remove("disabled")
        }
        else {
            boton.classList.add("disabled")
        }
    }

    document.getElementById("boton").onclick = () => {
        const listaProductos = document.getElementById("listaProductos")
        listaProductos.innerHTML = ""
        axios.get(`https://dummyjson.com/products/search?q=${inputProducto.value}`)
            .then(function (response) {
                response.data.products.forEach(element => {

                    const productos = document.createElement("div");
                    productos.classList.add("col-sm-3");
                    productos.innerHTML =
                        `
            <div id="producto" class="card">
                <img id="imagenProducto" src="${element.thumbnail}" height="250px" width="auto" class="card-img-top">
                <div class="card-body">
                <h5 id="tituloProducto"class="card-title">${element.title}</h5>
                <button id="botonVerMas"class="btn btn-success" onclick="verMas('${element.id}')"data-bs-toggle="modal" data-bs-target="#exampleModal"">Ver mas</button>
                </div>
            </div>`
                    listaProductos.appendChild(productos);
                });

            })
    }
    return (
        <div>

            <header class="masthead">
                <div class="container position-relative">
                    <div class="row justify-content-center">
                        <div class="col-xl-6">
                            <div class="text-center text-white">

                                <h1 class="mb-5">Busque el producto que necesite!</h1>


                                <div class="row">
                                    <div class="col">
                                        <input class="form-control form-control-lg" id="producto" type="email" placeholder="Producto..." />
                                    </div>
                                    <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="boton" type="submit">Buscar</button></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class="row" id="listaProductos">

            </div>


            <div id="detalles">
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="tituloModal">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p id="descripcionModal"></p>
                                <p id="precioModal"></p>
                                <p id="ratingModal"></p>
                                <p id="stockModal"></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="footer bg-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <ul class="list-inline mb-2">
                                <li class="list-inline-item"><a href="#!">About</a></li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item"><a href="#!">Contact</a></li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                            </ul>
                            <p class="text-muted small mb-4 mb-lg-0">&copy;Tiago Glusman - Agustin Fulco</p>
                        </div>
                        <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item">
                                    <a href="https://github.com/teglus133/TP3---JS"><i class="bi-github fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );


}