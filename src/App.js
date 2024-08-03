
import './App.css';
import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./Pages/pages"
import Data from "./components/Data"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Sdata from "./components/shops/Sdata"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import SignIn from "./components/AuthencationComponents/signIn/signIn"
import SignUp from './components/AuthencationComponents/signUp/signUp'
import ContactUs from './common/header/ContactUs';

function App() {

  const { productItems } = Data
  const { shopItems } = Sdata


  const [CartItem, setCartItem] = useState([])


  const addToCart = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {

      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }


  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)


    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {

      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact
            element={<SignIn productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
          />
          <Route path='/signUp' exact
            element={<SignUp productItems={productItems} addToCart={addToCart} shopItems={shopItems} />}
          />
          <Route path='/page' exact
            element={
              <ProtectedRoute element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />} />}
          />
          <Route path='/cart' exact
            element={<Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
          />
          <Route path='/contact' exact
            element={<ContactUs  />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App