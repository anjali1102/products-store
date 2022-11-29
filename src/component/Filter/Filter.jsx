import React from "react";
import { FiFilter } from "react-icons/fi";
import { useFilter } from "../../context/filter-context";
import { CostFilter } from "../CostFilter/CostFilter";
import { TypeFilter } from "../TypeFilter/TypeFilter";
import "./Filter.css";

const Filter = () => {
  const { dispatch } = useFilter();
  return (
    <main className="filter_wrapper">
      <section className="filter_header flex my-2">
        <h2>FILTERS</h2>
        <FiFilter className="filter-icon" size={30} />
      </section>
      <CostFilter />
      <TypeFilter />
      <section>
        <button
          className="primary-btn p-1 d-block my-2 filter-btn mx-auto"
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
        >
          Reset Filter
        </button>
      </section>
    </main>
  );
};

export { Filter };
