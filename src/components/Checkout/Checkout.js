import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../context/StateProvider";
function Checkout() {

    const [{ basket }] = useStateValue();
    return (

        <div className="checkout">
            <div className="checkout__left">
                {/* <img src ="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="image not found" */}
                <img src="https://i.pinimg.com/564x/1f/08/65/1f0865ae231cd9efe9bdd7147a92d4a1.jpg" alt="image not found"

                    className="checkout__ad" />
                <div>

                    <h2 className="checkout__title">
                        Your Shopping basket
                    </h2>
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

            <div className="checkout__right">
                {/* <img src="https://i.pinimg.com/564x/a6/30/5b/a6305b67e3e377703b07646269a3c485.jpg" alt="image not found" /> */}
                <img className="checkout__right__img" src="https://i.pinimg.com/564x/d8/f8/40/d8f840f6ab504bf021dcd9b49194636b.jpg" alt="image not found" />

                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;