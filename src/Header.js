import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Header.css'
import {Link}  from "react-router-dom";
import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <nav className='header'>

            <Link to ="/"><img className="header_logo" src="image/Logo.png"/></Link>
            
            
            <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>
    

        </div>
<div className="header_nav" >
   <Link to ="/login" className="header_link">
       <div className="header_option">
   <span className="header_optionOne">Hello</span>
   <span className="header_optionTwo">Sign In</span>
   </div>
   </Link>
   <Link to="/house" className="header_link">
       <div className="header_option">
   <span className="header_optionOne">Home</span>
   <span className="header_optionTwo">& Car rental</span>
   </div>
   </Link>
   <Link to= "/" className="header_link">
       <div className="header_option">
   <span className="header_optionOne">Your</span>
   <span className="header_optionTwo">amshop</span>
   </div>
   </Link>
   <Link to ="/checkout" className="header_link">
<div className="header_optionBasket">
<ShoppingBasket/>
    <span  className="header_optionTwo  header_basketCount" >{basket?.length}</span>
</div>
   </Link>
</div>
       
        </nav>
    )
}

export default Header
