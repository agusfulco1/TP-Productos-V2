
export default function Button(props) {
    console.log(props)
    return (
        <>
            <button className="boton" onClick={props.onPress}>{props.titulo}</button>
        </>
        
    )
}