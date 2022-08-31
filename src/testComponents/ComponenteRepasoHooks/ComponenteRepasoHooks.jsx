import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ComponenteRepasoHooks = ({greeting}) => {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
    // console.log(estado);
    // let count = 0;
    const aumentar = () => {
        setCount(count +1);
    }

    const cambiarBooleano = () => {
        setBool(!bool);
    }
    
    // Cuidado con los hooks que si los usas antes del render pueden hacer bucles infinitos.

    // El use effect se va a saltar hasta que se termine de renderizas y montar el componente.
    useEffect( () => {
        console.log("Se ejecuta siempre 1");
    });

    useEffect(() => { // Este es el hook que usamos para las apis
        console.log("llamando apis 2");
    }, [])

    useEffect(() => {
        console.log("se ejecuta al principio y cuando cambia el booleano 4");
    }, [bool]); // Se va a ejecutar solamente cuando cambie bool
    console.log("El componente se monta 3");
  return (
    <div>
        {greeting}
        {count}
        <br />
        {/* Cuando haya un evento más abajo este botón volverá a ejecutar la función render */}
        {/* Va a pasar de vuelta por count, lo va a volver a definir en 0 y entonces nunca va a modificarse en pantalla */}
        {/* <button onClick = {setCount(count + 1)}> Aumentar </button> */}
        <button onClick = {aumentar}> Aumentar </button>
        <button onClick = {cambiarBooleano}> Cambiar booleano</button>
    </div>
  )
}

export default ComponenteRepasoHooks