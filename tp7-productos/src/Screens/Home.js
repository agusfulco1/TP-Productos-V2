import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../Styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../Img/bg-showcase-1.jpg'
import foto2 from '../Img/bg-showcase-2.jpg'
import foto3 from '../Img/Gato.jpg'
import Col from 'react-bootstrap/Col';

export default function Home() {
    const [destacados, setDestacados] = useState([])
    const [isLoading, setLoading] = useState(true)
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                const prods = response.data.products;
                let destacadosArray = [];
                for (let index = 0; index < 6; index++) {
                    let num
                    num = randomNumberInRange(0, prods.length - 1);
                    destacadosArray.push(prods[num]);
                }
                setDestacados(destacadosArray);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    const calcularDescuento = (producto)  => {
        let precio = producto.price
        let discount = producto.discountPercentage
        const precioConDescuento = (Math.round(precio - (precio * discount/100)))
        return precioConDescuento
    }

    return (
        <div>
            {isLoading ? null : (
                <>
                    <div className='container'>
                       <h1 className='titulo'>Bienvenidos a TechGlus</h1>
                    </div>
                    
                    <div className='RowCarousel d-flex justify-content-center'>
                        <Carousel className='Carousel'>
                            <Carousel.Item className='boxFoto'>
                                <img className='fotoCarousel' src={foto1} alt='hola' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={foto2} alt='hola' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={foto3} width='900' height='600' alt='hola' />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className='container'>
                        <Row style={{ marginLeft: 10 }} md={3}>
                            {destacados.map((element) => {
                                return (
                                    <Col>
                                        <Card className='producto' style={{ width: "18rem" }} key={element.id}>
                                            {element.thumbnail == null ? <h1>No hay imagen</h1> : <Card.Img variant="top" src={element.thumbnail} style={{ height: "150px" }} />}
                                            <Card.Body>
                                                <Card.Title>{element.title}</Card.Title>
                                                <Card.Text className='precios'>
                                                    <h1 className='precioConDescuento'>{element.price}$</h1>
                                                    <h1>&nbsp;{calcularDescuento(element)}$</h1>
                                                </Card.Text>
                                                <Button variant="primary">Comprar</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>

                </>
            )}
        </div>
    );
}