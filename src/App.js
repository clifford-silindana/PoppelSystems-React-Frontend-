import logo from './logo.svg';
import './App.css';

import {Link, BrowserRouter, Routes, Route } from "react-router-dom";

//component import
import Navigation from './components/Navigation';

//pages imports
import Customers from './pages/Customers';
import CustomerDetails from './pages/CustomerDetails';
import CreateCustomer from './pages/CreateCustomer';
import CreateOrder from './pages/CreateOrder';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter >
        <Routes>
          <Route path = "/customers" element = {<Customers />} />
          <Route path = "/customers/create" element = {<CreateCustomer />} />
          <Route path = "/customers/:id" element = {<CustomerDetails/>} />
          <Route path = "/orders/create" element = {<CreateOrder/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
