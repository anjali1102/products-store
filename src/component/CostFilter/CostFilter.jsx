import React from "react";
import { useFilter } from "../../context/filter-context";

const CostFilter = () => {
  const {
    dispatch,
    state: { filterAbove1500, filterAbove4000, filterAbove7000 },
  } = useFilter();
  return (
    <section className="cost_container">
      <h2 className="py-1">Cost</h2>
      <label className="d-block" htmlFor="1500-4000">
        <input
          onChange={() => dispatch({ type: "1500-4000" })}
          type="checkbox"
          id="1500-4000"
          checked={filterAbove1500}
        />
        <span className="fs-lg ml-1">Rs. 1500 - 4000</span>
      </label>
      <label className="d-block" htmlFor="4001-7000">
        <input
          onChange={() => dispatch({ type: "4001-7000" })}
          type="checkbox"
          id="4001-7000"
          checked={filterAbove4000}
        />
        <span className="fs-lg ml-1">Rs. 4001 - 7000</span>
      </label>
      <label className="d-block" htmlFor="7001+">
        <input
          onChange={() => dispatch({ type: "7001" })}
          type="checkbox"
          id="7001"
          checked={filterAbove7000}
        />
        <span className="fs-lg ml-1">Rs. 7001+</span>
      </label>
    </section>
  );
};

export { CostFilter };
