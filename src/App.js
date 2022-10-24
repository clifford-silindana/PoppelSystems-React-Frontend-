import logo from './logo.svg';
import './App.css';

import {Link, BrowserRouter, Routes, Route } from "react-router-dom";

//component import
import Navigation from './components/Navigation';

//pages imports
import Customers from './pages/Customers';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter >
        <Routes>
          <Route path = "/customers" element = {<Customers />} />
          <Route path = "/customers/:customer_id" element = {<CustomerDetails/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
