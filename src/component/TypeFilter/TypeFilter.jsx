import React from "react";
import { useFilter } from "../../context/filter-context";

const TypeFilter = () => {
  const {
    filterDispatch,
    filterState: { filterByLoafers, filterBySneakers },
  } = useFilter();
  return (
    <section className="type_container">
      <h3 className="py-1">Type</h3>
      <label className="d-block" htmlFor="loafers">
        <input
          onChange={() => filterDispatch({ type: "LOAFERS" })}
          type="checkbox"
          id="loafers"
          checked={filterByLoafers}
        />
        Loafers
      </label>
      <label className="d-block" htmlFor="sneakers">
        <input
          onChange={() => filterDispatch({ type: "SNEAKERS" })}
          type="checkbox"
          id="sneakers"
          checked={filterBySneakers}
        />
        Sneakers
      </label>
    </section>
  );
};

export { TypeFilter };
