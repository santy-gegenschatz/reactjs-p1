import React from 'react'
import { useState } from 'react'
import './AddToCart.css'

const AddToCart = ({onAdd, onAddWishlist}) => {

    const [itemQuantity, setItemQuantity] = useState(1);

    function aumentar() {
        if (itemQuantity < 100) {
            setItemQuantity( itemQuantity + 1);
        }
    }

    function disminuir() {
        if (itemQuantity > 1) {
            setItemQuantity( itemQuantity - 1);
        }
    }

    return (
        <div className = 'div-general'>
            <p> Select the number of Items you would like to add to your cart</p>
            <div className = 'div-key-components'>
                <button className = 'btn btn-info btn-cyan' onClick = {disminuir}> - </button>
                <div className = 'center'>
                    <p className = 'item-counter-label'> {itemQuantity} </p>
                </div>
                <button className = 'btn btn-info btn-cyan' onClick = {aumentar}> + </button>
            </div>
            <button className = 'btn btn-success w-75 btn-buy' onClick = {() => onAdd(itemQuantity)} > Buy Now </button>
            <button className = 'btn btn-info w-75 btn-buy' onClick = {() => onAddWishlist()}> Add to Wishlist ❤️</button>
        </div>
    )
}

export default AddToCart