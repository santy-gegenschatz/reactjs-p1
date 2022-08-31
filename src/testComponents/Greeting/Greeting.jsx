import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className = 'div-principal'>
        <div className = 'div-secundario'>
            <p> Este es un componente contenedor que muestra un saludo que llega por un prop. </p>
            <p> {greeting} </p>
        </div>
    </div>
  )
}

export default ItemListContainer