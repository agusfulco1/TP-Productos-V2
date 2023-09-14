
export default function Button(props) {
    return (
        <>
            <button className="boton" onClick={props.onPress}>{props.titulo}</button>
        </>
        
    )
}