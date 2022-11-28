import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useCart } from "../../context/cart-context";
import "./CartCard.css";

const CartCard = ({ _id, image, name, price }) => {
  const { cart, setCart } = useCart();

  const cartCardHandler = () => {
    const updatedCart = cart.filter((items) => items._id !== _id);
    setCart(updatedCart);
  };
  return (
    <main className="cartCard_wrapper flex">
      <AiOutlineCloseCircle
        onClick={cartCardHandler}
        className="remove-from-cart-icon"
        size={30}
        color="red"
      />
      <div className="cart-product-img-container">
        <img src={image} alt="cart-product" className="cart-product-img" />
      </div>
      <div className="cart-product-details pl-2">
        <div>{name}</div>
        <div>by KICKSUP and you.</div>
        <div className="py-2">Rs. {price}</div>
      </div>
    </main>
  );
};

export { CartCard };
