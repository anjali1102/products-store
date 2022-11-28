import React from "react";
import { Cart } from "../Cart/Cart";
import { SingleProductCard } from "../SingleProductCard/SingleProductCard";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <main className="SingleProduct_wrapper p-3 my-3">
      <SingleProductCard />
      <Cart />
    </main>
  );
};

export { SingleProduct };
