import React from "react";
import { useFilter } from "../../context/filter-context";

const DesignTemplateFilter = () => {
  const {
    filterDispatch,
    filterState: { filterDesign2, filterDesign3, filterDesignAbove3 },
  } = useFilter();
  return (
    <section className="designT_container my-2">
      <h3 className="py-1">Design Template</h3>
      <label className="d-block" htmlFor="2">
        <input
          onChange={() => filterDispatch({ type: "2" })}
          type="checkbox"
          id="2"
          checked={filterDesign2}
        />
        2
      </label>
      <label className="d-block" htmlFor="3">
        <input
          onChange={() => filterDispatch({ type: "3" })}
          type="checkbox"
          id="3"
          checked={filterDesign3}
        />
        3
      </label>
      <label className="d-block" htmlFor="3+">
        <input
          onChange={() => filterDispatch({ type: "ABOVE3" })}
          type="checkbox"
          id="3+"
          checked={filterDesignAbove3}
        />
        3+
      </label>
    </section>
  );
};

export { DesignTemplateFilter };
