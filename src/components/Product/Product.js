import React from 'react';
import "./Product.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { CartContext } from "../../CartContext";
import { useStateValue } from "../../context/StateProvider";

function Product({ id, title, price, rating, image }) {
  // const cart = useContext(CartContext);
  // const productQuantity = cart.getProductQuantity({ id });
  // console.log(cart.items);

const [, dispatch] =useStateValue();

const addToBasket = () =>{
  dispatch({
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title:title,
      image: image,
      price: price,
      rating: rating
    },
  });
};

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
              // <p> ⭐ </p>
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="Image nor found" />
      <button className='basket' onClick={ addToBasket }> <ShoppingBasketIcon /> Add to Basket </button>
    </div>
  );
}

export default Product;


// import React from 'react';
// import "./Product.css";
// import {Card, Button , Form , Row, Col} from "react-bootstrap";
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { CartContext } from "../../CartContext";
// import { useContext } from "react";


// function Product({ id, title, price, rating, image }) {
//   const cart = useContext(CartContext);
//   const productQuantity = cart.getProductQuantity({ id });
//   console.log(cart.items);
//   return (
//     <div className="product">
//       <div className="product__info">
//         <p> {title} </p>
//       </div>
//       <div className="product__price">
//         <p>
//           <small> $</small>
//           <strong> {price} </strong>
//         </p>
//         <div className="product__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>  </p>
//             ))}
//         </div>
//       </div>

//       <img src={image} alt="Image nor found" />
//       { productQuantity > 0 ?
//       <>
//       <Form as = {Row}>
//         <Form.Label column="true" sm="6" > In Cart : {productQuantity}</Form.Label>
//         <Col sm="6">
//       <Button sm="6" className='basket' onClick={() => cart.addOneToCart({ id })}> + </Button>
//         <Button sm ="6" onClick={() => cart.removeOneFromCart({ id })} className="my-2">
//           -
//         </Button>
//         </Col>
//       </Form>

//         <Button variant='danger' onClick={() => cart.deleteFromCart} className="my-2">
//           Remove from cart
//         </Button>
//       </>
//       :
//       <Button variant='primary' onClick={() => cart.addOneToCart} className="my-2">
//        <ShoppingBasketIcon />  Add To cart
//     </Button>
//     }
//     </div>
//   )
// }

// export default Product;
