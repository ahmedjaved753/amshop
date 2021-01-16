import React from "react";

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Header from './Header';
import './App.css';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"

function App() {
  return (
    <Router>
 <div className="app">
 <Header />
  <Switch>
  

    <Route path="/checkout" >
  
      <Checkout/>
    </Route>

    <Route path="/login">
  
    
    <Login/>
    
    </Route>
      <Route path="/">
  
  <Home/> 
  </Route>
  
  </Switch>
 
 </div>


    </Router>
   
  );
}

export default App;
