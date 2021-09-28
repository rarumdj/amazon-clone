import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutP__img" />
        <div className="checkoutP__info">
          <p className="checkoutP__title">{title}</p>
          <p className="checkoutP__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutP__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
