import React from "react";
import { FiSearch } from "react-icons/fi";
import { data } from "../../backend/data";
import { ProductCard } from "../productCard/ProductCard";
import "./Product.css";

const Product = () => {
  return (
    <main className="product_wrapper">
      <section className="product_header flex-align-center my-2">
        <h1>SHOES</h1>
        <FiSearch className="filter-icon" size={20} />
        <button className="p-1 mx-2 secondary-btn">sort by</button>
      </section>
      <section className="product_items">
        {data.products.map((item) => {
          return <ProductCard {...item} key={item.id} />;
        })}
      </section>
    </main>
  );
};

export { Product };
