import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
export default function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div classNmae="checkout_left">
<img className="checkout_add" src="https://mindstack.in/blog/wp-content/uploads/2018/01/ecommerce-banner.jpg" alt=""/>
<div>

    <h2 className="checkout_title">Your shoping Basket </h2>
    {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
</div>

            </div>
            <div className="checkout_right">
                <Subtotal/>




            </div>
            
        </div>
    )
}
