import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineStar } from "react-icons/ai";
import { useCart } from "../../context/cart-context";
import { getRatings, isAlreadyInCart } from "../../utils/utils";
import { products } from "../../data";
import "./SingleProductCard.css";

const SingleProductCard = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  const selectedproduct = products.find(({ _id }) => _id === productId);
  const { image, name, price, rating } = selectedproduct;
  const stars = getRatings(rating);

  const inCart = isAlreadyInCart(cart, productId);

  const clickHandler = () => {
    console.log(inCart);
    if (inCart) {
      const updatedCart = cart.filter(({ _id }) => _id !== selectedproduct._id);
      setCart(updatedCart);
    } else {
      setCart((prevData) => [...prevData, selectedproduct]);
    }
  };

  const customDesign = [
    { id: 1, name: "Front" },
    { id: 2, name: "Middle" },
    { id: 3, name: "Back" },
    { id: 4, name: "Sole" },
  ];

  return (
    <div className="single-product-card  p-3">
      <div className="flex-align-center my-2">
        <IoIosArrowBack
          className="arrow-back-icon"
          onClick={() => navigate("/store")}
          size={25}
        />
        <h2 className="pl-2">your design space</h2>
      </div>
      <div className="product pl-5 pt-2">
        <div className="product-main flex">
          <div className="img-container flex">
            <div className="product-img-container-lg">
              <img
                className="product-img product-img-lg"
                src={image}
                alt={name}
              />
            </div>
            <div className="product-img-container-sm flex">
              <img
                className="product-img product-img-sm "
                src={image}
                alt={name}
              />
              <img
                className="product-img product-img-sm"
                src={image}
                alt={name}
              />
              <img
                className="product-img product-img-sm"
                src={image}
                alt={name}
              />
            </div>
          </div>
          <div className="details flex">
            <div className="product-name">
              <div className="fs-xl">{name}</div>
              <div>by KICKSUP</div>
            </div>
            <div className="product-ratings">
              {stars}
              <div>80 reviews</div>
            </div>
            <div className="product-price">
              <div className="fs-lg">Rs. {price}</div>
              <div className="fs-sm">
                Get an exclusive 20% off shopping with HDFC bank
              </div>
            </div>

            {customDesign.map(({ id, name }) => {
              return (
                <div key={id} className="flex custom-option">
                  <div>{name}</div>
                  <div className="custom-img-container flex pl-2">
                    <img
                      className="custom-img"
                      src="https://cdn3.vectorstock.com/i/1000x1000/24/42/black-white-check-pattern-seamless-fabric-texture-vector-11322442.jpg"
                      alt="design"
                    />
                    <img
                      className="custom-img"
                      src="https://hoseco.com.au/wp-content/uploads/2018/03/Light-Blue-Box.jpg"
                      alt="design"
                    />
                    <img
                      className="custom-img"
                      src="https://i.pinimg.com/originals/e9/26/b6/e926b6a96be26cb093290f80e9dceef3.png"
                      alt="design"
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex custom-option">
              <div>Font</div>
              <div className="custom-img-container flex pl-5">
                <div className="custom-size">7</div>
                <div className="custom-size">8</div>
                <div className="custom-size">9</div>
                <div className="custom-size">10</div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 flex">
          <span>Rate Product</span>
          <div className="pl-1 flex-align-center">
            <AiOutlineStar color="#f4b90e" />
            <AiOutlineStar color="#f4b90e" />
            <AiOutlineStar color="#f4b90e" />
            <AiOutlineStar color="#f4b90e" />
            <AiOutlineStar color="#f4b90e" />
          </div>
        </div>
        <div className="flex-center product-btns">
          <button className="secondary-btn p-1">Share Design</button>
          <button onClick={clickHandler} className="primary-btn p-1">
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export { SingleProductCard };
