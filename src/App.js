import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createContext, useEffect, useState } from "react";
import './App.css';
import Landing from './Components/Landing';
import Products from './Components/Products';
import Details from './Components/Details';
import Card from "./Components/Cart";
import Navbar from "./Components/Navbar";

export const AddProductToCart = React.createContext();

function App() {
  const [cart, setCart] = useState([])
  const [countCart, setCountCard] = useState(0)
  
  const addToCart =(elm) => {
    setCart([...cart, elm])
 }

 const countItems = () => setCountCard(cart.length)

 useEffect(() => {
   countItems()
 }, [cart])

  console.log("valor de cart en app", cart)
  return (
    
    <BrowserRouter>
    
    <Navbar count={countCart}/>

    <AddProductToCart.Provider value={{cart, setCountCard, setCart, addToCart}}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Details />} />
        <Route path="/shop" element={<Card/>}/>
      </Routes>
    </AddProductToCart.Provider>
    
  </BrowserRouter>
  );
}

export default App;
