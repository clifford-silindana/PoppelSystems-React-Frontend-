import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

function Customers() {
    const [customers, setCustomers] = useState([]);
    const[isLoading, setIsLoading] = useState(true);


    //fetch(url, options)
    let url = "https://localhost:7082/api/Customers"
    let options = {
        method : "GET",
        headers : {"Content-Type" : "application/json"},
    }
    useEffect(() => {
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            setCustomers(data);
            setIsLoading(false)
        })
    }, []);


  return (
    <div>
        {isLoading ? <h1>Loading...</h1> : customers.map((customer) => (
            <div className = "customer-preview" key = {customer.customerId}>
                 <h1>{customer.customerName}</h1>
                 <Link to = {`/customers/${customer.customerId}`}><button type="button" class="btn btn-info">Info</button></Link>

            </div>
        ))}
    </div>



  );
}

export default Customers