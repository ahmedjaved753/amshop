import React from "react";

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Header from './Header';
import './App.css';
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import CountryProduct from "./Login";
import StateProductList from "./StateProductList";

function App( ) {
  return (
    <Router>
 <div className="app">
 <Header />
  <Switch>
  

    <Route path="/checkout" >
  
      <Checkout/>
    </Route>

    <Route exact path="/login" component={ Login } />
    <Route  exact path="/country/list/page" component={ StateProductList } />
    <Route path="/">

  <Home/> 
  </Route>
  
  
  </Switch>
 
 </div>


    </Router>
   
  );
}

export default App;
