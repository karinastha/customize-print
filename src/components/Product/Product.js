import React from 'react';
import "./Product.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Product({ id, title, price, rating, image }) {

  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
      </div>
      <div className="product__price">
        <p>
          <small> $</small>
          <strong> {price} </strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>

      <img src={image} alt="Image nor found" />
      <button className='basket'> <ShoppingBasketIcon /> Add to Basket </button>
    </div>
  )
}

export default Product
