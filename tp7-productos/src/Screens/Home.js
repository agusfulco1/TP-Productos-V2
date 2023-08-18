import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import '../Styles/Home.css'
import Carousel from 'react-bootstrap/Carousel';
import gato from '../Img/gato.jfif';
import Col from 'react-bootstrap/Col';

export default function Home() {
    const [destacados, setDestacados] = useState([])
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
                    num = randomNumberInRange(1, prods.length);
                    destacadosArray.push(prods[num]);
                    console.log(destacadosArray)
                }
                setDestacados(destacadosArray);
            });
    }, [])
    return (
        <div>
            <Row md={4}>
                {destacados.map((element) => {
                    return (
                        <Col>
                        <Card style={{ width: "18rem"}}>
                            <Card.Img variant="top" src={element.thumbnail} style={{ height: "150px"}}/>
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    {element.price} $
                                </Card.Text>
                                <Button variant="primary">Comprar</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
            <Carousel className='Carousel'>
                <Carousel.Item >
                    <img src={gato} alt='hola' />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={gato} alt='hola' />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={gato} alt='hola' />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>


    );
}