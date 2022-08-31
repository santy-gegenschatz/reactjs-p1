import React from 'react'
import './GiftcardElement.css'

const GiftcardElement = ({value}) => {
  return (
    <div className = 'div-main-giftcardelement'>
        <h4> The Winter Store Giftcard </h4>
        <h6> Value: {value} USD </h6>
        <div className = 'div-button-giftcardelement'>
            <button className = 'btn btn-light'> Purchase not yet available </button>
        </div>
        <div className = 'div-logo-giftcardelement'>
            <h1 id = 'h1-logo-giftcardelement'> ❄ </h1>
        </div>
    </div>
  )
}

export default GiftcardElement