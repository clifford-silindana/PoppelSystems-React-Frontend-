import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Navigation from '../components/Navigation';

import "../styles/CustomerDetails.css";

function CustomerDetails() {
    const {customer_id} = useParams();
    const [customer, setCustomer] = useState("");
    const[isLoading, setIsLoading] = useState(true);

    function handleDelete() {
        fetch("https://localhost:7082/api/Customers/" + customer_id, 
        {method : "DELETE"}).then(response => {
            console.log(response.status)
        })
    }

    useEffect(() => {
        fetch("https://localhost:7082/api/Customers/" + customer_id).then(
          response => {return response.json();}
        ).then(data => {
          setCustomer(data);
          setIsLoading(false);
        })
      }
      , [])
    
  return (
    <div>    
        <Navigation />
        <div className = "customer-preview-2">
        <h1 className = "page-heading">Customer Details - {customer.customerName}</h1>
        <div className = "customer-texts">
        
        <h3 className = "customer-text">customer id: {customer.customerId}</h3>
        <h3 className = "customer-text">phone number: {customer.customerPhone}</h3>
        <h3 className = "customer-text">home address: {customer.customerAddress}</h3>
        <h3 className = "customer-text">credit status: {customer.customerCreditStatus}</h3>
        </div>
        <button type="button" class="btn btn-warning" id = "edit-btn">Edit</button>
        <button type="button" class="btn btn-danger" id = "delete-btn"onClick = {handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default CustomerDetails;