import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditCustomer() {

    const[customerName, setCustomerName] = useState("clifford");
    const[customerPhone, setCustomerPhone] = useState("");
    const[customerAddress, setCustomerAddress] = useState("");
    const[customerCreditStatus, setCustomerCreditStatus] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const {customer_id} = useParams();

    let url = "http://localhost:8000/customers/";

    useEffect(() => {
        fetch(url + customer_id)
        .then((response) => {return response.json()})
        .then((data) => {
        setCustomerName(data.customerName);
        setCustomerAddress(data.customerAddress);
        setCustomerPhone(data.customerPhone);
        setCustomerCreditStatus(data.customerCreditStatus);
        setIsLoading(false);
    })

    }, [])
    

    function handleSubmit() {
        let data = {customerName, customerPhone, customerAddress, customerCreditStatus};
        let options = {method : "PUT", body : JSON.stringify(data), headers : {"Content-Type" : "application/json"}};
        fetch(url + customer_id, options)
        .then((response) => {return response.json()})
        .then((data) => console.log(data.status))
        .catch((error) => console.log(error.message))
    }
  return (
    <div>
        <h1>EditCustomer {customer_id}</h1>
        {isLoading ? <h1>Loading...</h1> :
        <form>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {customerName} onChange = {(e) => setCustomerName(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {customerPhone} onChange = {(e) => setCustomerPhone(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {customerAddress} onChange = {(e) => setCustomerAddress(e.target.value)}/>
            <input class="form-control" type="text" placeholder="Default input" defaultValue = {customerCreditStatus} onChange = {(e) => setCustomerCreditStatus(e.target.value)}/>
            <button type="button" class="btn btn-warning" onClick = {handleSubmit}>Submit</button>
        </form>}
        
        
    </div>
  )
}

export default EditCustomer