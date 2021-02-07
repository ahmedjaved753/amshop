import React from "react";
import "./Footer.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Footer">
      <a onClick={handleClick}>
        <div className="Footer__Back-To-Top">
          <ExpandLessIcon className="Footer__Back-To-Top-Text" />
        </div>
      </a>

      <div className="Footer__Vertical-Row">
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Get to Know Us</div>
          <ul>
            <li>About</li>
            <li>Career</li>
            <li>Press</li>
            <li>Amshop Cares</li>
            <li>News letter</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Make Money with Us</div>
          <ul>
            <li>Sell on fake Amshop</li>
            <li>Become an Affiliate</li>
            <li>Track your shipment</li>
            <li>Pay by phone</li>
          </ul>
        </div>
        <div className="Footer__Vertical-Col">
          <div className="Footer__Vertical-Col-Head">Connect with us</div>
          <ul>
            <li>COVID-19 </li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Am App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="Footer__Line">
        <img
          className="Footer__Line-logo"



           
          src="https://raw.githubusercontent.com/andinet2019/amshop/main/public/image/Logo.png"
          alt=""
        />
        <span className="Footer__Line-message">
          Powered  by &copy;{" "}
          <a href="#" target="_blank">
          Amshop Limited 2020-2021  ,USA
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;