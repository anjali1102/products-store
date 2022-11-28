import React from "react";
import { getRatings } from "../../utils/utils";
import "./ProductCard.css";

const ProductCard = ({ id, name, image, price, rating }) => {
  console.log(id, name, price);
  const stars = getRatings(rating);
  return (
    <main className="product-card">
      <img src={image} className="product-img" alt="shoe" />
      <div className="product-details flex-align-center">
        <div>
          <div className="product-name">{name}</div>
          <div className="product-price">{price}</div>
        </div>
        <div className="ratings">{stars}</div>
      </div>
    </main>
  );
};

export { ProductCard };
