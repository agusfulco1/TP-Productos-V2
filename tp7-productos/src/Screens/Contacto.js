import '../Styles/Contacto.css'
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function Contacto() {
    return (
        <div>
            <h1>Si tienes alguna duda, contactanos!</h1>
            <Input titulo={"Nombre"}></Input>
            <Input titulo={"Apellido"}></Input>
            <Input titulo={"Email"}></Input>
            <Input titulo={"Mensaje"}></Input>
            <Button titulo={"Enviar"}></Button>
        </div>
    )
}