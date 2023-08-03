

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CartProvider from './context/CartContext'
import Wrapper from './components/Wrapper'
import Cart from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'





function App() {

const [showCart,setShowCart] = useState(false)
  

  return (
    <>
    <CartProvider>
    
        <Header showCart={showCart} setShowCart={setShowCart}/>
       
       {
        showCart ? (<Cart/>) : (<Wrapper/>)
       }
    </CartProvider>
    </>
  )
}

export default App
