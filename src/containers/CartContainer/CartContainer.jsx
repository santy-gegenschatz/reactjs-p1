import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Cart from '../../components/Cart/Cart';
import { Link } from 'react-router-dom';
import './CartContainer.css';

const CartContainer = () => {

  const {cartList, cartIsEmpty} = useContext(CartContext);
  const [loadedCart, setLoadedCart] = useState(false);

  const getProducts = (delay) => {
    let promise = new Promise ((resolve, reject) => {
      setTimeout( () => {
        resolve(true)
      }, delay)
    })
    return promise;
  }

  useEffect(() => {
    console.log("Verifying");
    if (cartIsEmpty()) {
      setLoadedCart(false);
    } else {
      console.log("Starting");
      getProducts(1000)
      .then( (resp) => {
        setLoadedCart(resp);
        console.log("Changing");
      })      
    }
  }, [])

  return (
    <div>
      {cartIsEmpty() ? 
      <div className = 'div-main-CartContainer'> 
        <p id = 'white-text'> The Cart is Empty. Why don't you check out our awesome products 🤛</p>
        <button className = 'btn btn-success' id = 'btn-store'>
          <Link to = '/' id = 'modified-link'>
            Go To The Store
          </Link>
        </button>
      </div>
      :
        <div>
          {console.log(loadedCart)}
          {!loadedCart ?
          <div> Loading the cart items...</div>
          :
          <div>
            <Cart items = {cartList} />
          </div>
          }
        </div>
      }
  </div>
  )
}

export default CartContainer
