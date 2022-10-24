import React, { useEffect, useState } from 'react';
//import {useHistory} from "react-router-dom";
import {Link, useParams} from "react-router-dom";

import Navigation from '../components/Navigation';

import "../styles/OrderDetails.css";


function OrderDetails() {
    const {order_details_id} = useParams()
    const[orderDetails, setOrderDetails] = useState([]);
    const[orderDetailId, setOrderDetailId] = useState("");
    const [isLoading, setIsLoading] = useState(true);
  //const [history] = useHistory();

  
  function handleDelete () {
    console.log("Deleted");

  }
  /*
  function handleDelete(props) {
    request("https://localhost:7082/api/CustomerOrders/" + {orderDetail.orderDetailId});
  }

  */

  

  useEffect(() => {
    fetch("https://localhost:7082/api/OrderDetails").then(
      response => {return response.json();}
    ).then(data => {
      setOrderDetails(data);
      setIsLoading(false);
    })
  }
  , [])

  
  return (
    <div>
        <Navigation />
        <h1 className = "page-heading">Order Details</h1>
        {isLoading && <h1>Loading...</h1>}
        {orderDetails && orderDetails.map((orderDetail) => (
           
          <div className = "orderDetail-preview" key = {orderDetail.orderDetailId}>
            <div className = "orderdetails-texts">
            <h3>this is from order id: {orderDetail.orderId}</h3>
            <h3>product name: {orderDetail.productName}</h3>
            <h3>price: {orderDetail.productPrice}</h3>
            <h3>quantity ordered: {orderDetail.quantityOrdered}</h3>
            <h3>order date: {orderDetail.orderDate}</h3>
            <h3>is the order invoiced yet? {orderDetail.isInvoiced}</h3>
            <h3>delivery status: {orderDetail.deliveryStatus}</h3>
            </div>
  
            <button type="button" class="btn btn-warning" id = "edit-btn">Edit</button>
        <button type="button" class="btn btn-danger" id = "delete-btn"onClick = {handleDelete}>Delete</button>
          </div>

        ))}
        

    </div>
  )
}

export default OrderDetails;