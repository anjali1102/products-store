import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import "./Cart.css";

const Cart = () => {
  return (
    <main className="cart_wrapper flex p-3">
      <div className="flex my-2">
        <h2>CART</h2>
        <FiShoppingBag className="cart-icon" size={25} />
      </div>
      <div className="cart-items flex"></div>
      <div className="cart-footer">
        <div className="flex">
          <div className="flex-align-center mr-1 disable-color">
            <HiOutlineLocationMarker />
            <span className="pl-1">Home</span>
          </div>
          <div className="flex-align-center ml-1 disable-color">
            <AiOutlineCalendar />
            <span className="pl-1 ">Select date</span>
          </div>
        </div>
        <button className="disable-btn p-1 my-2 d-block mx-auto">
          Order now
        </button>
      </div>
    </main>
  );
};

export { Cart };
