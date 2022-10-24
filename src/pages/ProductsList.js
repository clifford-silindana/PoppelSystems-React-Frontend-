import React, { useEffect, useState } from 'react';
//import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

//style import
import "../styles/ProductsList.css";

import Navigation from '../components/Navigation';

function ProductsList() {
  const[products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [history] = useHistory();

  /*
  function handleDelete () {
    fetch("http://localhost:8000/customers")

  }*/

  function handleDelete() {
    console.log("Deleted");
  }

  

  useEffect(() => {
    fetch("https://localhost:7082/api/Products").then(
      response => {return response.json();}
    ).then(data => {
      setProducts(data);
      setIsLoading(false);
    })
  }
  , [])

  
  return (
    <div>
        <Navigation />
        <h1 className = "all-products-heading">All Products</h1>
        {isLoading && <h1>Loading...</h1>}
        {products && products.map((product) => (
          <div className = "product-preview" key = {product.productId}>
            <h3>price{product.productName}</h3>
            <h3>R{product.productPrice}</h3>
            <h3>quantity in stock: {product.quantityInStock}</h3>
  
            
          </div>

        ))}
        

    </div>
  )
}

export default ProductsList;