import React from 'react'
import { Link } from 'react-router-dom'
import './GoToCart.css'

const GoToCart = () => {
  return (
    <div className = 'main-div-GoToCart'>
        <h3> ¡Great Purchase! </h3> 
        <h2 > 🔥 </h2>
        <div id = 'div-btn-GoToCart'>
          <Link to = '/cart' >
              <button className = 'btn btn-info btn-margin'> Go To Cart </button>
          </Link> 
          <Link to = '/'>
            <button className = 'btn btn-success btn-margin '> Keep Shopping</button>
          </Link>
        </div>

        
    </div>
  )
}

export default GoToCart