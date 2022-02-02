import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AddProductToCart } from '../App';

import '../App';
const  Details = (props) => {
  
  const {id} = useParams()
  const [details, setDetails] = useState([]);
  
  const {addToCart} = useContext(AddProductToCart)
  
  const fetchDetails = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`); // sample
    let response = await res.json();
    setDetails(response); // parse json
    console.log("que hay", response);
  };
  
  useEffect(() => {  
    fetchDetails();
  }, []);
  

  return (
    <div className="App">
   
    <section className="cards">
    
        <div className="text">
            <h2>Details:</h2>
            <p className="title"> Title: {details.title}</p>
            <p className="description"> Description: {details.description}</p>
            <p className="price">Price: {details.price}€</p>
            <input type='submit' value='Add to cart' onClick={()=> addToCart(details)}></input>
            
        </div>
        <div className="image">
              <img src={details.image} alt={details.title} />
        </div>

    </section>
    
    </div>
  );
}

export default Details;
