import React from "react";
import { useFilter } from "../../context/filter-context";

const CostFilter = () => {
  const {
    filterDispatch,
    filterState: { filterAbove1500, filterAbove4000, filterAbove7000 },
  } = useFilter();
  return (
    <section className="cost_container my-2">
      <h3 className="py-1">Cost</h3>
      <label className="d-block" htmlFor="1500-4000">
        <input
          onChange={() => filterDispatch({ type: "1500-4000" })}
          type="checkbox"
          id="1500-4000"
          checked={filterAbove1500}
        />
        Rs. 1500 - 4000
      </label>
      <label className="d-block" htmlFor="4001-7000">
        <input
          onChange={() => filterDispatch({ type: "4001-7000" })}
          type="checkbox"
          id="4001-7000"
          checked={filterAbove4000}
        />
        Rs. 4001 - 7000
      </label>
      <label className="d-block" htmlFor="7001+">
        <input
          onChange={() => filterDispatch({ type: "7001" })}
          type="checkbox"
          id="7001"
          checked={filterAbove7000}
        />
        Rs. 7001+
      </label>
    </section>
  );
};

export { CostFilter };
