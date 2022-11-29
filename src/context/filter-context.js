import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext();

const filterInitalState = {
  filterAbove1500: false,
  filterAbove4000: false,
  filterAbove7000: false,
  filterByLoafers: false,
  filterBySneakers: false,
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    filterReducer,
    filterInitalState
  );
  // const [product, setProduct] = useState([]);
  return (
    <FilterContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter, filterInitalState };
