import React from "react";
import { FiSearch } from "react-icons/fi";
import { data } from "../../data";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "../productCard/ProductCard";
import { filterproducts } from "../../utils/utils";
import "./Product.css";

const Product = () => {
  const { filterState } = useFilter();
  const filteredProducts = filterproducts(filterState, data);

  return (
    <main className="product_wrapper">
      <section className="product_header flex-align-center my-2">
        <h1>SHOES</h1>
        <FiSearch className="filter-icon" size={20} />
        <button className="p-1 mx-2 secondary-btn">sort by</button>
      </section>
      <section className="product_items">
        {filteredProducts.map((item) => {
          {
            console.log("item", item);
          }
          <ProductCard key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
};

export { Product };
