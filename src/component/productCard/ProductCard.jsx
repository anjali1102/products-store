import React from "react";
import { useNavigate } from "react-router-dom";
import { getRatings } from "../../utils/utils";
import "./ProductCard.css";

const ProductCard = ({ _id, name, image, price, rating }) => {
  const stars = getRatings(rating);
  const navigate = useNavigate();
  return (
    <main className="product-card">
      <img
        src={image}
        className="product-img"
        alt="shoe"
        onClick={() => navigate(`/store/${_id}`)}
      />
      <div className="product-details flex-align-center">
        <div>
          <div className="product-name">{name}</div>
          <div className="product-price">Rs. {price}</div>
        </div>
        <div className="ratings">{stars}</div>
      </div>
    </main>
  );
};

export { ProductCard };
