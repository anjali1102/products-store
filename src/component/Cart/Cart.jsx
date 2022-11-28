import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import "./Cart.css";
import { useCart } from "../../context/cart-context";
import { CartCard } from "../CartCard/CartCard";

const Cart = () => {
  const { cart } = useCart();
  return (
    <main className="cart_wrapper flex p-3">
      <div className="flex my-2">
        <h2>CART</h2>
        <FiShoppingBag className="cart-icon" size={25} />
      </div>
      <div className="cart-items flex">
        {cart.length ? (
          cart.map((cartItem) => <CartCard key={cartItem.id} {...cartItem} />)
        ) : (
          <div>What's stopping you, designer?</div>
        )}
      </div>
      <div className="cart-footer">
        <div className="flex">
          <div
            className={`${
              !cart.length && "disable-color"
            } flex-align-center mr-1 `}
          >
            <HiOutlineLocationMarker />
            <span className="pl-1">Home</span>
          </div>
          <div
            className={`${
              !cart.length && "disable-color"
            } flex-align-center ml-1 `}
          >
            <AiOutlineCalendar />
            <span className="pl-1 ">Select date</span>
          </div>
        </div>
        <button
          className={`${
            cart.length ? "primary" : "disable"
          }-btn p-1 my-2 d-block mx-auto`}
        >
          Order now
        </button>
      </div>
    </main>
  );
};

export { Cart };
