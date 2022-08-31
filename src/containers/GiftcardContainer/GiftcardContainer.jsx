import React, { useEffect, useState } from 'react'
import Giftcard from '../../components/Giftcard/Giftcard'
import { Giftcards } from '../../helpers/Giftcards';
import './GiftcardContainer.css'

const GiftcardContainer = () => {
    const [giftcards, setGiftcards] = useState([]);

    const getGiftcards = () => {
        Giftcards().then( (reponse) => {
            setGiftcards(reponse);
        })
    }

    useEffect(() => {
        getGiftcards();
    }, [])
  return (
    <div className = 'div-main-giftcardcontainer'>
        {giftcards.length === 0 ?
        <div>
            <p className = 'white-text'> Loading giftcards...</p>
        </div>
        :
        <div className = 'div-main-giftcardcontainer'>
            <Giftcard giftcards = {giftcards}/>
        </div>
        }
    </div>
  )
}

export default GiftcardContainer