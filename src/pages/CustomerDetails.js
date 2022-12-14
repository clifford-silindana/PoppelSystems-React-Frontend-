import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Navigation from '../components/Navigation';

import "../styles/CustomerDetails.css";

function CustomerDetails() {
    const { id } = useParams();
    const [customer, setCustomer] = useState("");
    const[isLoading, setIsLoading] = useState(true);

    let url = "http://localhost:8000/customers/";
    //let url = "https://localhost:7082/api/Customers/";

    useEffect(() => {
      fetch(url + id)
      .then(response => response.json())
      .then(data => {
        setCustomer(data)
        setIsLoading(false)
      })
    }
    , [])

    
    function handleDelete() {
        fetch(url + id, {method : "DELETE", headers : {"Content-Type" : "application/json"}})
        }
      
    
      return (
        <div>    
            <Navigation />
            {isLoading && <h1>Loading...</h1>}
            
            {customer && <div className = "customer-preview-2">
            <h1 className = "page-heading">Customer Details - {customer.customerName}</h1>
            <div className = "customer-texts">
            
            <h3 className = "customer-text">customer id: {customer.id}</h3>
            <h3 className = "customer-text">phone number: {customer.customerPhone}</h3>
            <h3 className = "customer-text">home address: {customer.customerAddress}</h3>
            <h3 className = "customer-text">credit status: {customer.customerCreditStatus}</h3>
            </div>
            <Link to = {"/customers/edit/" + customer.id}><button type="button" class="btn btn-warning" id = "edit-btn">Edit</button></Link>
            <button type="button" class="btn btn-danger" id = "delete-btn" onClick = {handleDelete}>Delete</button>
            </div>}    
         </div>
         
  )}


export default CustomerDetails;

