import React from 'react'
import './AñadirProducto.css';
import { useState } from 'react';

const AñadirProducto = ({start, limite}) => {
    const [inicial, setInicial] = useState(start);
    
    const aumentar = () => {
        if (inicial < 100) {
            setInicial( inicial + 1 );
        }
    }

    const disminuir = () => {
        if (inicial > 0) {
            setInicial( inicial - 1 );
        }
    }
  return (
    // El div que retorna contiene los elementos para que se cumplan las funciones necesarias.
        <div className='div-principal'> 
            <div className = 'div-externo'>
                <h3> Añadir Productos al Carrito </h3>
                {/*Acá va un div que tiene un input y los dos botones */}
                <div className = 'div-principal'>
                    <button className='btn btn-dark' onClick={ disminuir }> - </button>
                    <label> { inicial }</label>
                    <button className='btn btn-dark' onClick={ aumentar }> + </button>
                </div>
                <button className = 'btn btn-success'> Agregar al carrito </button>
            </div>
        </div>
  )
}

export default AñadirProducto
