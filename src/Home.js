
import Footer from './Footer'
import "./Home.css"
import Product from './Product'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
// import faker from 'faker';
import React, {useEffect, useState} from 'react';

const Home = () => {

  useEffect(() => (
    slider(0)
), [])

    return (
        <div className="home">
 

 <div className="home__container">
                {/* Image Banner */}
                <div className="home__toast-container">
                    <ToastContainer />
                </div>
                <div className="home__slider-container">
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://ual-media-res.cloudinary.com/image/fetch/c_fill,f_auto,g_auto,q_auto,ar_16:9/w_auto:breakpoints/https://www.arts.ac.uk/__data/assets/image/0027/159282/SS-2019-collection.jpg"
                            alt="image0" />
                    </div>
                  
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://www.cloudways.com/blog/wp-content/uploads/Trending-Products-to-Sell-2020.jpg"
                            alt="image2" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://media.allure.com/photos/5f9897489283a483812528b4/16:9/w_2560%2Cc_limit/Tarte%252520Custom%252520Kit%252520Oct%2525202020%252520lede.jpg"
                            alt="image3" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                            alt="image4" />
                    </div>
   
                   
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
                 <Product 
                id="1234534"
                title="Women’s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants"
                price={20}
                rating={3}
                image="https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
              
                />
                 <Product 
                id="1234534"
                title="Women’s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants"
                price={20}
                rating={3}
                image="https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
              
                />
                 <Product 
                id="1234534"
                title="Women’s Solid Color Two Piece Outfit Long Sleeve Crewneck Pullover Tops And Long Pants"
                price={20}
                rating={3}
                image="https://m.media-amazon.com/images/I/61aam+KYtgL._AC_UL320_.jpg"
              
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
               
               <Product 
                   id="1234567"
                   title="ASUS Laptop L210 Ultra thin"
                   price={364}
                   rating={3}
                   image="https://justfreewpthemes.com/wp-content/uploads/edd/2018/12/Free-Ecommerce-Solution-WordPress-theme-1000x750.png"
                 
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
           <Footer/>
            
            
            </div>
        </div>
    )
}


function slider(counter) {
  const slides = document.querySelectorAll(".home__image");

  slides.forEach((slide, index) => {
      if (index !== counter) {
          slide.style.visibility = `hidden`
          slide.classList.add(`image-${index}`)
      }
  })
  moveCorousal(counter, slides, slides.length)
}

function moveCorousal(counter, slides, len) {

  if (slides) {

      if (counter >= len - 1)
          counter = 0
      else
          counter += 1

      slides.forEach((slide, index) => {
          if (index === counter) {
              slide.style.visibility = `visible`
          }
          else {
              slide.style.visibility = `hidden`
          }
      })

  }
  setTimeout(() => {
      moveCorousal(counter, slides, len);
  }, 5000)

  // parseInt(counter) % 5 === 0 ? (
  //     setTimeout(() => {
  //         toast.info(`${faker.name.findName()} added new product to cart`, {
  //             position: "bottom-left"
  //         });
  //     }, 10500)
  // ) : (
  //         setTimeout(() => {
  //         }, 21000)
  //     )

}
export default Home