import { filterInitalState } from "../context/filter-context";

export const filterReducer = (state, { type, payload }) => {
switch (type) {
    case "1500-4000":
      return { ...state, filterAbove1500: !state.filterAbove1500 };
    case "4001-7000":
      return { ...state, filterAbove4000: !state.filterAbove4000 };
    case "7001":
      return { ...state, filterAbove7000: !state.filterAbove7000 };
    case "LOAFERS":
      return { ...state, filterByLoafers: !state.filterByLoafers };
    case "SNEAKERS":
      return { ...state, filterBySneakers: !state.filterBySneakers };
    case "CLEAR_FILTER":
      return { ...filterInitalState };
    default:
      return state;
  }
};
