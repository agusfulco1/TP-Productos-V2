import axios from 'axios'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Home() {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState()
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((response) => setProductos(response.data))
        for (let index = 0; index < 6; index++) {
            let num
            num = randomNumberInRange(1, productos.length);
            setProducto(productos[num])
        }
    }, [])
    return (
        <div>
            {productos.map((element) => {
                return (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    );
}