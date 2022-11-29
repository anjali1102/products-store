import React from "react";
import { useFilter } from "../../context/filter-context";

const TypeFilter = () => {
  const {
    dispatch,
    state: { filterByLoafers, filterBySneakers },
  } = useFilter();
  return (
    <section className="type_container">
      <h2 className="py-1">Type</h2>
      <label className="d-block" htmlFor="loafers">
        <input
          onChange={() => dispatch({ type: "LOAFERS" })}
          type="checkbox"
          id="loafers"
          checked={filterByLoafers}
        />
        <span className="fs-lg ml-1">Loafers</span>
      </label>
      <label className="d-block" htmlFor="sneakers">
        <input
          onChange={() => dispatch({ type: "SNEAKERS" })}
          type="checkbox"
          id="sneakers"
          checked={filterBySneakers}
        />
        <span className="fs-lg ml-1">Sneakers</span>
      </label>
    </section>
  );
};

export { TypeFilter };
