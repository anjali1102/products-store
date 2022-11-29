import { filterInitalState } from "../context/filter-context";

export const filterReducer = (products, { type, payload }) => {
  switch (type) {
    case "1500-4000":
      return { ...products, filterAbove1500: !products.filterAbove1500 };
    case "4001-7000":
      return { ...products, filterAbove4000: !products.filterAbove4000 };
    case "7001":
      return { ...products, filterAbove7000: !products.filterAbove7000 };
    case "LOAFERS":
      return { ...products, filterByLoafers: !products.filterByLoafers };
    case "SNEAKERS":
      return { ...products, filterBySneakers: !products.filterBySneakers };
    case "CLEAR_FILTER":
      return { ...filterInitalState };
    default:
      return products;
  }
};
