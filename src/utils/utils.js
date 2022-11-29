import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const getRatings = (rating) => {
  const arrayOfStars = [1, 2, 3, 4, 5];
  return arrayOfStars.map((index) =>
    rating >= index ? (
      <AiFillStar key={index} color="yellow" />
    ) : (
      <AiOutlineStar key={index} color="#f4b90e" />
    )
  );
};

export const filteringOfPrice = (products, state) => {
  const { filterAbove1500, filterAbove4000, filterAbove7000 } = state;
  const priceNewList = [];

  if (
    filterAbove7000 === false &&
    filterAbove1500 === false &&
    filterAbove4000 === false
  ) {
    return products;
  }

  // console.log(filterAbove1500);
  if (filterAbove1500 === true) {
    let copied = products.filter(({ price }) => price >= 1500 && price < 4000);
    // console.log(copied);

    priceNewList.push(...copied);
  }

  console.log("filterAbove4000", filterAbove4000);
  if (filterAbove4000 === true) {
    let copied = products.filter(({ price }) => price >= 4000 && price < 7001);
    console.log(copied);
    priceNewList.push(...copied);
  }

  if (filterAbove7000 === true) {
    let copied = products.filter(({ price }) => price >= 7001);
    // console.log(copied);
    priceNewList.push(...copied);
  }

  return priceNewList;
};

export const filteringOfCategory = (categoryList, state) => {
  const { filterByLoafers, filterBySneakers } = state;
  const categoryNewList = [];

  if (filterByLoafers === false && filterBySneakers === false) {
    return categoryList;
  }

  if (filterByLoafers === true) {
    let copied = categoryList.filter(({ type }) => type === "loafers");
    categoryNewList.push(...copied);
  }

  if (filterBySneakers === true) {
    let copied = categoryList.filter(({ type }) => type === "sneakers");
    categoryNewList.push(...copied);
  }

  return categoryNewList;
};

export const isAlreadyInCart = (cartItems, id) => {
  return cartItems.some((items) => items._id === id);
};
