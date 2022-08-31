import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

const WishlistContext = createContext();

export const useWishlistContext = () => {
    return (useContext(WishlistContext));
}

const WishlistContextProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    const addItemToWishlist = (item) => {
        // Check if we can find the item id in the wishlist array
        const index = wishlist.findIndex( (element) => element.id === item.id)
        if (index === -1) {
            // case item does not exist in wish list
            // add it
            const newWishlist = [...wishlist, item];
            setWishlist(newWishlist); 
            toast.success('🤟 Item added to Wishlit!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme : 'colored'
                });
            } else {
            // case the item exists in the wishlist
            // show a toastify alert saying the item is already on the wishlist
            toast.warning('Whooia there boy! Item already in the wishlist', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme : 'colored'
                });
        }
    }

    const wishlistIsEmpty = () => {
        return wishlist.length === 0 ? (true) : (false);
    }

    const emptyWishlist = () => {
        setWishlist([]);
    }

  return (
    <WishlistContext.Provider value = {{
        wishlist,
        addItemToWishlist,
        wishlistIsEmpty,
        emptyWishlist
    }
    }>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContextProvider