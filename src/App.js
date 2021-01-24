import React from "react";

import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Header from './Header';
import './App.css';
import './App.scss'
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import ImageSlider from "./Slider"

function App() {
  return (


    

    <Router>
       


 <div className="app">

 <Header />

 <div className=" container  mt-5 carousel">
 <ImageSlider />
  </div>


 
 
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
