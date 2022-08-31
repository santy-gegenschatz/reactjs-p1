import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.css'

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext);
  return (
    <div className = 'div-main-cartitem'> 
        <div className = 'div-photo-cartitem'>
            <img src={item.url} alt="product" width = {150} height = {150} id = 'cartitem-image'/>
        </div>

        <div className = 'div-details-cartitem'>
            <h4> {item.name} </h4>
            <h6> {item.brand} </h6>
            <p id = 'special-paragraph'> <strong> {item.price} USD </strong></p> 
            <p id = 'special-paragraph'> {`Quantity : ${item.itemQuantity}`} </p> 
        </div>
        
        <div className = 'div-button-cartitem'>
            <button className = 'btn btn-info' onClick = {() => removeItem(item)}> Remove Item</button>
        </div>
    </div>
  )
}

export default CartItem