import React, { useContext, useEffect, useState } from 'react'
import { AddProductToCart } from '../App';
import { FcFullTrash } from "react-icons/fc";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import './components.css';
import '../App';
import Empty from './Empty';

function Cart() {
  
  const {cart, setCountCard, addToCart} = useContext(AddProductToCart)
  const [total, setTotal] = useState(undefined)
  
  const cartDup = [...cart]
  const unicos = [];
  
  for(var i = 0; i < cartDup.length; i++) {
   
    const elemento = cartDup[i];
   
    if (!unicos.includes(cartDup[i])) {
      unicos.push(elemento);
    }
  }
  
  console.log("nuevo array", unicos);
  
  var repetidos = {};
  
  cart.forEach(function(title){
    repetidos[title.title] = (repetidos[title.title] || 0) + 1;
  });
  const countProductItem = Object.values(repetidos)
  
  console.log('que hay aqui', countProductItem)
  
  
  const totalPrice =() => {
    let cartTotal = cart?.reduce((sum, elm)=> ({price: sum.price + elm.price}))
    setTotal(cartTotal)
    
  }
  
  const deleteFromCart = (item) =>{
    let index = cart.indexOf(item)
    cart.splice(index, 1)
    setCountCard(cart.length)
    
  }
  
  // const copyCart = [...cart]
  // const filter = copyCart.filter(elm => elm.id.includes(String(elm.id)))
  // console.log("filtrooooo", filter)
  
  useEffect(() => {
    (cart?.length !== 0) && totalPrice();   
    
  }, [cart.length])
  

  return (
    <div className="App">
    
      <div>
      <h2>Card Shop:</h2>

      {(cart.length === 0)? <Empty />
      :
      <div>
          {unicos?.map((elm) =>(<div key={elm.id} className="products">
                                    <p>TITLE: {elm.title}</p>
                                    <p>PRICE: {elm.price.toFixed(2)}</p>
                                                                    
                                    <button type='submit' onClick={()=> addToCart(elm)}><GrAdd></GrAdd></button>
                                    <p>{countProductItem.splice(0, 1)}</p>
                                    <button type='submit' onClick={()=> deleteFromCart(elm)}><GrFormSubtract></GrFormSubtract></button>
                                                                
          </div>))}

          Total: {total?.price?.toFixed(2)}€
      </div>
      }

      </div>  
    </div>
  );
}

export default Cart;
