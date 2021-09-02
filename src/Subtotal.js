import React from 'react';
import './Checkout.css';
import './Subtotal.css';
// import { useStateValue } from './StateProvider';

function Subtotal() {

    // const [{cart}, dispatch] = useStateValue

    return(
        <div className="subtotal">
            {/* <div>
                <p>
                    Subtotal({cart.length} items): <strong></strong>
                </p>    
            </div> */}
        <button className="checkout__button">Proceed to Checkout</button>
        </div>
    );

}


export default Subtotal;