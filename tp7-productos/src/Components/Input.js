
export default function Input(props) {
    return (
        <div className="containerInput">
            <label>{props.titulo}:</label><br />
            <input className='input' type="text" required size="50"></input>
        </div>
    )
}