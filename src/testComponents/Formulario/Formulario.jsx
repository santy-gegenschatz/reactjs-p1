import './Formulario.css';

const Formulario = (props) => {
    return(
        <div>
            <div className='special-div'>
                <form action="">
                    <input type="text" placeholder = "Título"/>
                    <input type="submit" value = "Cambiar Título de la Página" onClick={props.saludar}/>
                </form>
            </div>
        </div>
    );
  }

  export default Formulario;