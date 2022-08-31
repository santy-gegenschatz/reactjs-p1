import React from 'react';
import { Link } from 'react-router-dom';
import './WishlistItem.css';

const WishlistItem = ({item, onClick}) => {
    console.log("Created");
  return (
    <div className = 'div-main-wishlistitem'>
        <div className = 'div-photo-wishlistitem'>
            <img src={item.url} alt="product" width = {150} height = {150} id = 'wishlistitem-image'/>
        </div>

        <div className = 'div-details-wishlistitem'>
        <h4> {item.name} </h4>
            <h6> {item.brand} </h6>
            <p id = 'special-paragraph'> <strong> {item.price} USD </strong></p> 
        </div>

        <div className = 'div-button-wishlistitem'>
            <Link to = '/cart'>
                <button className = 'btn btn-success' onClick = {onClick}> Add to Cart</button>
            </Link>
        </div>
    </div>
  )
}

export default WishlistItem