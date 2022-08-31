import './ItemDetail.css'
import AddToCart from '../AddToCart/AddToCart'
import GoToCart from '../GoToCart/GoToCart.jsx'
import { useState, useContext } from 'react'
import {CartContext}  from '../../contexts/CartContext'
import { useWishlistContext } from '../../contexts/WishlistContext'

const ItemDetail = ({item}) => {
    const [purchase, setPurchase] = useState(false);
    const { addToCart } = useContext(CartContext);
    const { addItemToWishlist } = useWishlistContext();
    
    const userAddToCart = (itemQuantity) => {
        addToCart({...item, itemQuantity}, false);
        setPurchase(true);
    }

    const userAddToWishlist = () => {
        addItemToWishlist(item);
    }
  return (
    <div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {item.url} alt = "product" className = 'image-product'/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {item.name} </h2>
                <h6> {item.brand} </h6>
            </div>

            <div className = 'div-product-details'>
                <p> {item.description} </p>
                <p className = 'price-text'> {item.price} USD </p>
                {!purchase ?
                    <div className = 'div-add-to-cart'>
                        {/* Lo interesante es que le estoy pasando una función por prop */}
                        <AddToCart onAdd = {userAddToCart} onAddWishlist = {userAddToWishlist}/>
                    </div>
                :
                    <div className = 'div-go-to-cart'> 
                        <GoToCart />
                    </div>
                }

            </div>


        </div>
    </div>
  )
}

export default ItemDetail