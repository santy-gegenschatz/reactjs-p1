import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../helpers/Products';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

  const {productId} = useParams();

  // Lo que vamos a necesitar es un array de productos que llenar mediante un hook de useState
  const [product, setProduct] = useState(0);
  
  // Primero hacemos una función que busqué la promesa
  function getItem() {
    return Products(true, 2000);
  } 

  // Luego, solamente la primera vez que se renderiza el componente llamamos 
  // a la función que busca la promesa, y cuando la promesa se resuelva seteamos el
  // estado de un array de productos, lo que hace que se vuelva a triggerear el render,
  // esta vez con productos ahora valiendo distinto de vacio, entonces via un operador ternario
  // que aplica una función que busca en el array de productos el id deseado lo terminamos mandando
  // a el componente Item Detail, que resulta ser un child de ItemDetailContainer
  useEffect( () => {
    console.log(new Date());
    getItem().then( (response) => {
      // Dado que cambia un estado se triggerea un re-render
      let product = response.find((product) => product.id === productId);
      setProduct(product);
    });
  }, []) 

  return (
    <div>
      <p className = 'white-text'> Item Detail Container</p>
      {product === 0 ? 
      <div> 
        <p className = 'white-text'> Loading...</p>
      </div>
      :
      <div className = 'div-centered'> 
        <ItemDetail item = {product} />   
      </div>
}
    </div>
  )
}

export default ItemDetailContainer