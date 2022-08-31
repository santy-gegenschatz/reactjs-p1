import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import { useWishlistContext } from '../../contexts/WishlistContext';
import WishlistItem from '../WishlistItem/WishlistItem';
import './Wishlist.css';

const Wishlist = ({items}) => {
  // Methods brought in from Global Contexts.
  const { addToCart } = useContext(CartContext);
  const { emptyWishlist } = useWishlistContext();

  const addItemToCart = (item) => {
    const objectForCart = {...item, itemQuantity : 1};
    addToCart(objectForCart);
  }
  return (
    <div className = 'div-main-wishlist'>
        Wishlist
        {/* Map the items, each item to a WishlistItem */}
        {items.map( (item) => {
            return (
                <WishlistItem item = {item} onClick = { () => addItemToCart(item)}/>
            )
        })}
        <button className = 'btn btn-info' onClick={emptyWishlist}> Empty Wishlist </button>
    </div>
  )
}

export default Wishlist