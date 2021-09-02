import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import ProductCart from './ProductCart';

function Checkout() {
    const [{cart}] = useStateValue();
    return(
        <div className="checkout">
            <div className="checkout__left">

            {
                cart.length === 0 ? (
                    <div>
                        <h2 className="checkout__title">Your cart is empty.</h2>
                        <p>You have no items in your cart. Buy one.</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="shoppingcarttitle">Items in the cart.</h2>
                        {
                            cart.map(item => (
                                <ProductCart
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            ))
                        }
                    </div>
                )
            }                              
            </div>
            {
                cart.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }            
        </div>
    );
}


export default Checkout;