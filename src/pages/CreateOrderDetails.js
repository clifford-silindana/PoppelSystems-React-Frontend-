import React, { useState }from 'react';
import Navigation from "../components/Navigation.js";

//style import
import "../styles/CreateOrder.css";

//image import
import orderdetails from "../images/orderdetails.jpg";

function CreateOrderDetails() {

    const [orderId, setOrderId] = useState("");
    const [productId, setProductId] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [quantityOrdered, setQuantityOrdered] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [productName, setProductName] = useState("");
    const [isInvoiced, setIsInvoiced] = useState("");
    const [deliveryStatus, setDeliveryStatus] = useState("");
    const [isPending, setIsPending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const order_detail = {"orderId":orderId, "productId":orderId, "productPrice" :productPrice, "quantityOrdered":quantityOrdered, "orderDate" : orderDate, "productName" : productName, "isInvoiced" : isInvoiced, "deliveryStatus" : deliveryStatus};
    setIsPending(true);

    fetch("http://localhost:8000/customers", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(order_detail)
    }).then(() => {
      console.log("new customer added");
      setIsPending(false);
      
    
    })
  }
  return (
    <div>
    <Navigation />
      <div className = "body-section">
        <div className = "create-cutomer-image-section">
        <img id = "welcome-img" src = {orderdetails} alt = "lady carrying cake"/>
        </div>
        <div className = "create-customer-content-section">
          <h1>create order details</h1>
          <form className = "create-customer-form" onSubmit={handleSubmit}>
            <input class="form-control" type="text" placeholder="Order ID" aria-label="default input example" onChange = {(e) => setOrderId(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Product ID" aria-label="default input example" onChange = {(e) => setProductId(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Product Price" aria-label="default input example" onChange = {(e) => setProductPrice(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Quantity Ordered" aria-label="default input example" onChange = {(e) => setQuantityOrdered(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Order Date" aria-label="default input example" onChange = {(e) => setOrderDate(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Product Name" aria-label="default input example" onChange = {(e) => setProductName(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Order Invoiced?" aria-label="default input example" onChange = {(e) => setIsInvoiced(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Delivery Status" aria-label="default input example" onChange = {(e) => setDeliveryStatus(e.target.value)}/>

            { !isPending && <button type="submit" class="btn btn-primary">save order details</button>}
            { isPending && <button type="button" class="btn btn-primary" disabled>saving details...</button>}
      
          </form>
        </div>

      </div>
    </div>
  )
}

export default CreateOrderDetails