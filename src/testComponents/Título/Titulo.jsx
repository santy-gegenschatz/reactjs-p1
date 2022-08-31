// Vamos a aplicar destructuración al objeto que viene como parámetro.
const Titulo = ({titulo, subtitulo}) => {
    return (
    // lAS FUNCIONES EN jS SOLAMENTE PUEDEN DEVOLVER UN OBJETO, POR ESO EL DIV.  
    // Lo que está abajo se llama fragment, y no crea ningún nodo.
    <> 
        {/*  Se usan las llaves para escapar de jsx y pedir variables.*/}
        <h2> {titulo} </h2> 
        <h5>{subtitulo} </h5>
    </>    
    );
}

export default Titulo;

