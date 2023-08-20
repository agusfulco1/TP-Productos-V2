import '../Styles/Contacto.css'

export default function Contacto() {
    return (
        <div>
            <h1>Si tienes alguna duda, contactanos!</h1>
            <div>
                <label>Nombre:</label><br/>
                <input className='input' type="text" required size="50"></input>
            </div>
            <div>
                <label>Apellido:</label><br/>
                <input type="text" required size="50"></input>
            </div>
            <div>
                <label>Email:</label><br/>
                <input type="text" required size="50"></input>
            </div>
            <div>
                <label>Mensaje:</label><br/>
                <input type="text" required size="50"></input>
            </div>
        </div>
    )
}