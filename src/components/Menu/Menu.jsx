import './Menu.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Menu = function () {
    const [productCategoriesVisible, setProductCategoriesVisible] = useState(false);

    const cambiarVisibilidad = () => {
     if (productCategoriesVisible === true) {
          setProductCategoriesVisible(false);
     } else {
          setProductCategoriesVisible(true);
     }
    }
    return (
        <div className = "div-menu">          
          <div className = 'superior-menu'>
               <h1> Welcome to the Winter Store </h1>
               <div id = 'div1'>
                    <div id = 'div2'>
                         <ul>
                              <li> <Link to = '/'> Home </Link> </li>
                              <li> <Link to = '/newSeason'> New Season </Link> </li> 
                              <li> <a onClick = {cambiarVisibilidad} id = 'link-products' > Products </a> </li>
                              <li> <Link to = '/wishlist'> WishList </Link> </li>
                              <li> <Link to = '/giftcards'> Gift Cards </Link> </li>
                         </ul>
                    </div>
               </div>
          </div>
          {productCategoriesVisible && 
          <div className = 'categories-menu'> 
               <div id = 'div3'>
                    <ul>
                         <li> <Link to = '/categories/shirts'> Shirts </Link> </li>
                         <li> <Link to = '/categories/pants'> Pants </Link> </li>
                         <li> <Link to = '/categories/jackets'> Jackets </Link> </li>
                         <li> <Link to = '/categories/accesories'> Accesories </Link> </li>
                    </ul>
               </div>
          </div>
          }
          <div className = 'right'>
               <CartWidget/>
          </div> 
     </div>
    );
}

export default Menu;