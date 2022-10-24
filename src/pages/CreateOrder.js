import React, { useState }from 'react';
import Navigation from "../components/Navigation.js";

//style import
import "../styles/CreateOrder.css";

//image import
import createorder from "../images/createorder.jpg";

function CreateOrder() {

    const [customerId, setCustomerId] = useState("");
    const [orderNumber, setOrderNumber] = useState("");
    const [grandTotal, setGrandTotal] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [isPending, setIsPending] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const customer = {"customerId":customerId, "orderNumber":orderNumber, "grandTotal" :grandTotal, "grandTotal":orderStatus};
    setIsPending(true);

    fetch("http://localhost:8000/customers", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify(createorder)
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
        <img id = "welcome-img" src = {createorder} alt = "lady carrying cake"/>
        </div>
        <div className = "create-customer-content-section">
          <h1>create new order</h1>
          <form className = "create-customer-form" onSubmit={handleSubmit}>
            <input class="form-control" type="text" placeholder="Customer ID" aria-label="default input example" onChange = {(e) => setCustomerId(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Order Number" aria-label="default input example" onChange = {(e) => setOrderNumber(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Grand Total" aria-label="default input example" onChange = {(e) => setGrandTotal(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Order Status" aria-label="default input example" onChange = {(e) => setOrderStatus(e.target.value)}/>

            { !isPending && <button type="submit" class="btn btn-primary">place order</button>}
            { isPending && <button type="button" class="btn btn-primary" disabled>placing your order...</button>}
      
          </form>
        </div>

      </div>
    </div>
  )
}

export default CreateOrder