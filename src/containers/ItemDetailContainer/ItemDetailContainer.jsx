import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../../helpers/Products';
import ItemDetail from '../../components/ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const {productId} = useParams();

  // We will nedd a product state that can change when information returns from Firebase
  const [product, setProduct] = useState(0);
  
  // We will call firebase after the first render of the ItemDetailContainer
  useEffect( () => {
    const db = getFirestore();
    const item = doc(db, 'items', productId);
    getDoc(item).then( (snapshot) => {
      //Once the promise changes, change the product state and re - redenr
      setProduct({id : snapshot.id, ...snapshot.data()})
    })
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