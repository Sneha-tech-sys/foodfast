import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Food from './Pages/Food';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Error from './Pages/Error';
import './index.css';
import Wishlist from './Pages/Wishlist';
import Fotter from './Components/Fotter';
import Checkout from './Pages/Checkout';
import SignUp from './Pages/Signup';
import Login from './Pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
         <Route path="/wish" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Fotter/>
    </BrowserRouter>
  );
}

export default App;
