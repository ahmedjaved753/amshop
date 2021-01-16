import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">

                <img className="home_image" src="http://www.indianonlinedealz.com/wp-content/uploads/2017/02/809505787_1472266408468_banner_carousel-bigdeal-70off-aug26-16.jpg" alt ="" />
            <div className="home_row">
              {/** product*/}
                {/** product*/}
                <Product 
                id="12345"
                title="Women's Crew Neck Pullover Sweater"
                price={200}
                rating={3}
                image="https://m.media-amazon.com/images/I/81Ea3fwJbiL._AC_UL320_.jpg"
              
                />
                 <Product 
                id="123456"
                title="Women's Kellen Sweater"
                price={125}
                rating={4}
                image="https://m.media-amazon.com/images/I/71z1hZH2QbL._AC_UL320_.jpg"
              
                />

            </div>
            <div className="home_row">
               
            <Product 
                id="1234567"
                title="ASUS Laptop L210 Ultra thin"
                price={364}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71DPRgRVKLL._AC_UL270_SR270,270_.jpg"
              
                />
                   <Product 
                id="12345678"
                title="Apple watch series 3"
                price={169.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_UL270_SR270,270_.jpg"
              
                />
                   <Product 
                id="123456789"
                title="Women Padded Sport Bra Fitness"
                price={65}
                rating={3}
                image="https://m.media-amazon.com/images/I/61N4IJZixJL._AC_UL320_.jpg"
              
                />
              {/** product*/}
                {/** product*/}
                {/** product*/}

            </div>
            <div className="home_row">
              {/** product*/}
              <Product 
                id="1234534"
                title="Women’s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants"
                price={20}
                rating={3}
                image="https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
              
                />
             

            </div>
           
            
            
            </div>
        </div>
    )
}

export default Home
