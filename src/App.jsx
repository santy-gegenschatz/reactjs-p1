import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import CartContainer from './containers/CartContainer/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer/CheckoutContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import WishlistContainer from './containers/WishlistContainer/WishlistContainer';
import CartContextProvider from './contexts/CartContext';
import WishlistContextProvider from './contexts/WishlistContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GiftcardContainer from './containers/GiftcardContainer/GiftcardContainer';

function App() {

  return (
    // We wrap the application in the ContextProviders & the Browser Router to give all elements access to them.
    <CartContextProvider>
      <WishlistContextProvider>
        <BrowserRouter> 
          <div className="App">
            <Menu />
            <Routes>
              <Route path = '/' element = {<ItemListContainer />} > </Route>
              <Route path = '/cart' element = {<CartContainer />} > </Route>
              <Route path = 'checkout' element = {<CheckoutContainer />} > </Route>
              <Route path = '/categories/:categoryId' element = {<ItemListContainer />} > </Route>
              <Route path = 'giftcards' element = {<GiftcardContainer />} > </Route>
              <Route path = '/items/:productId' element = {<ItemDetailContainer />} > </Route>
              <Route path = '/newSeason' element = {<ItemListContainer />} />
              <Route path = '/wishlist' element = {<WishlistContainer />} />
              <Route path = '*' element = {<Navigate to = '/' />}> </Route>
            </Routes>
            <ToastContainer/>
            <Footer />
          </div>
        </BrowserRouter>
      </WishlistContextProvider>
    </CartContextProvider>
  );
}

export default App;
