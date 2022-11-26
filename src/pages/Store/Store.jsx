import React from "react";
import { Cart } from "../../component/Cart/Cart";
import { Filter } from "../../component/Filter/Filter";
import { Product } from "../../component/Product.jsx/Product";
import "./Store.css";

const Store = () => {
  return (
    <main className="store_wrapper">
      <Filter />
      <Product />
      <Cart />
    </main>
  );
};

export { Store };
