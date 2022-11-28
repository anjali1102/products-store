import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { useCart } from "../../context/cart-context";

const CartCard = ({ _id, img, name, price }) => {
  const { cart, setCart } = useCart();

  const cartCardHandler = () => {
    const updatedCart = cart.filter((items) => items._id !== _id);
    setCart(updatedCart);
  };
  return (
    <main className="cartCard_wrapper flex">
      <FaWindowClose
        onClick={cartCardHandler}
        className="remove-from-cart-icon"
        size={20}
        color="red"
      />
      <div className="cart-product-img-container">
        <img src={img} alt="cart-product" className="cart-product-img" />
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
