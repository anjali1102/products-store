export const filterproducts = (state, items) => {
  const {
    filterAbove1500,
    filterAbove4000,
    filterAbove7000,
    filterByLoafers,
    filterBySneakers,
  } = state;
  const updatedProducts = [];

  if (filterAbove1500) {
    updatedProducts.push(
      ...items.filter(({ price }) => price >= 1500 && price < 4000)
    );
  }

  if (filterAbove4000) {
    updatedProducts.push(
      ...items.filter(({ price }) => price >= 4000 && price < 7000)
    );
  }

  if (filterAbove7000) {
    updatedProducts.push(...items.filter(({ price }) => price >= 7000));
  }

  if (filterByLoafers) {
    updatedProducts.push(...items.filter(({ type }) => type === "loafers"));
  }

  if (filterBySneakers) {
    updatedProducts.push(...items.filter(({ type }) => type === "sneakers"));
  }
  if (updatedProducts.length) {
    return updatedProducts;
  } else {
    return items;
  }
};

export const isAlreadyInCart = (cartItems, id) => {
  cartItems.some((items) => items._id === id);
};
