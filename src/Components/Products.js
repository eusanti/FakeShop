import React, { useState, useEffect, useContext } from "react";
import { AddProductToCart } from '../App';
import { Link } from "react-router-dom";
import '../App';
import { GrShop } from "react-icons/gr";

const Products = (props) => {
 const {addToCart, cart} = useContext(AddProductToCart)
 const [data, setData] = useState([]);
 console.log("products", cart)

  const fetchData = async () => {
    let res = await fetch("https://fakestoreapi.com/products"); // sample
    let response = await res.json();
  //  console.log(response);
    setData(response); // parse json
   };
   
  useEffect(() => {  
    fetchData();
    
  }, []);
  return <div className="App">
  <div>
      <h2>Products:</h2>
      <div className="products">
      
      {data?.map((elm) => (<div key={elm.id} className="product" >
                                <div ><img src={elm.image} alt={elm.title} className="productImg" /></div>      
                                <div>TITLE: {elm.title}</div>
                                <div>PRICE: {elm.price.toFixed(2)}</div>
                                
                                <Link  to={`/products/${elm.id}`} data={data.id}>Details</Link>
                                <button type='submit' value='add' onClick={()=> addToCart(elm)}>
                                  <GrShop></GrShop>
                                </button>

                          </div>))}
      </div>

  </div>
  </div>; //here will be shown data
};
export default Products;