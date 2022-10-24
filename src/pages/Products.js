import React from 'react';
import { Link } from "react-router-dom";

//component import 
import Navigation from "../components/Navigation.js";

//style import 
import "../styles/Products.css";

//picture imports
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";


function Products() {
  return (
    <div>
      <Navigation />

      <div className="products-header">
        <h1 className="page-description">explore our products</h1>
        <Link to="/productslist"><button type="button" class="btn btn-primary">View more details</button></Link>
      </div>
      <div className="products-row-1">
        <div className="product">
          <img src={image1} className="product-img" alt="" />
          <p className="product-description">soft drinks</p>
          <p className="product-price">R20.00</p>
        </div>

        <div className="product">
          <img src={image2} className="product-img" alt="" />
          <p className="product-description">doughnuts</p>
          <p className="product-price">R50.00</p>
        </div>

        <div className="product">
          <img src={image3} className="product-img" alt="" />
          <p className="product-description">100% juice</p>
          <p className="product-price">R30.00</p>
        </div>

        <div className="product">
          <img src={image4} className="product-img" alt="" />
          <p className="product-description">sweets</p>
          <p className="product-price">R15.00</p>
        </div>
      </div>

      <div className="products-row-2">
        <div className="product">
          <img src={image5} className="product-img" alt="" />
          <p className="product-description">cakes</p>
          <p className="product-price">R200</p>
        </div>

        <div className="product">
          <img src={image6} className="product-img" alt="" />
          <p className="product-description">fizzy drinks</p>
          <p className="product-price">R35.00</p>
        </div>

        <div className="product">
          <img src={image7} className="product-img" alt="" />
          <p className="product-description">biscuits</p>
          <p className="product-price">R35.00</p>
        </div>

        <div className="product">
          <img src={image8} className="product-img" alt="" />
          <p className="product-description">cake on the go</p>
          <p className="product-price">R50.00</p>
        </div>
      </div>

    </div>
  )
}

export default Products