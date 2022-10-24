import React, { useState } from 'react';

import Navigation from '../components/Navigation';

function CreateCustomer() {
    const[customerName, setCustomerName] = useState("");
    const[customerPhone, setCustomerPhone] = useState("");
    const[customerAddress, setCustomerAddress] = useState("");
    const[customerCreditStatus, setCustomerCreditStatus] = useState("");

    let url = "http://localhost:8000/customers";
    let data = {customerName, customerPhone, customerAddress, customerCreditStatus};
    let options = {method : "POST", body : JSON.stringify(data), headers : {"Content-Type" : "application/json"}}


    function handleSubmit(e) {
        e.preventDefault();
        fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))

    }
    return (
        <div>
            <Navigation />
            <h1>CreateCustomer</h1>
            <form>
                <input class="form-control" type="text" placeholder="customer name" onChange = {(e) => setCustomerName(e.target.value)}/>
                <input class="form-control" type="text" placeholder="customer phone" onChange = {(e) => setCustomerPhone(e.target.value)}/>
                <input class="form-control" type="text" placeholder="customer address" onChange = {(e) => setCustomerAddress(e.target.value)}/>
                <input class="form-control" type="text" placeholder="customer credit status" onChange = {(e) => setCustomerCreditStatus(e.target.value)}/>
                <button type="button" class="btn btn-success" onClick = {handleSubmit}>Submit</button>
            </form>

            
        </div>
    )
}

export default CreateCustomer