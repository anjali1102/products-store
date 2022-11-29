import React from "react";
import { FiSearch } from "react-icons/fi";
import { products } from "../../data";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "../productCard/ProductCard";
import { filteringOfPrice, filteringOfCategory } from "../../utils/utils";
import "./Product.css";

const Product = () => {
  const { state } = useFilter();
  const filteredProductsByPrice = filteringOfPrice(products, state);
  const filteredProductsByCategory = filteringOfCategory(
    filteredProductsByPrice,
    state
  );

  return (
    <main className="product_wrapper">
      <section className="product_header">
        <h1>SHOES</h1>
        <div className="product_header_btns">
          <FiSearch className="filter-icon" size={20} />
          <button className="sort-by-btn secondary-btn">sort by</button>
        </div>
      </section>
      <section className="product_items">
        {filteredProductsByCategory.length === 0 ? (
          <>
            <div>
              No products matching in our database with your applied filter
            </div>
          </>
        ) : (
          filteredProductsByCategory.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })
        )}
      </section>
    </main>
  );
};

export { Product };
