import React from 'react';
import './ProductCart.css';
import {useStateValue} from './StateProvider';

function ProductCart({id, title, image, price}) {
    const [{cart}, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return(
        <div className="productcart">
            <img className="productcart__image" src={image} alt="" />
            <div className="productcart__info">
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">Rs {price}</p>
                <button onClick={removeItem}>Remove from the cart</button>
            </div>
        </div>
    );


}

export default ProductCart;