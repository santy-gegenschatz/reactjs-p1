import React from 'react'

const TestComponent = () => {
    let productos = [
        {id : 1, nombre : 'remera'},
        {id : 2, nombre : 'jean'},
        {id : 3, nombre : 'camisa'}
    ]
  return (
    <div>
        <p> Componentes </p>
        <ul>
            {productos.map((p) => {
                <li> {p.nombre}</li>
            })}
        </ul>
    </div>
  )
}

export default TestComponent