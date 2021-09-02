import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id, title, price, image}) {
    const [{cart}, dispatch] = useStateValue();
    // console.log('cart content', cart);
    const addToCart = () => {
        dispatch({
        type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            }
        })
    }

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>Rs {price}</strong>
                </p>
                <img src={image} alt="" />
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
}


export default Product;
