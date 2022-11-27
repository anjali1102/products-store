import React from "react";
import { FiFilter } from "react-icons/fi";
import "./Filter.css";

const Filter = () => {
  return (
    <main className="filter_wrapper p-3">
      <section className="filter_header flex my-2">
        <h1>FILTERS</h1>
        <FiFilter className="filter-icon" size={30} />
      </section>
      <section className="cost_container my-2">
        <h3 className="py-1">Cost</h3>
        <label className="d-block" htmlFor="1500-4000">
          <input type="checkbox" />
          Rs. 1500 - 4000
        </label>
        <label className="d-block" htmlFor="4001-7000">
          <input type="checkbox" />
          Rs. 4001 - 7000
        </label>
        <label className="d-block" htmlFor="7001+">
          <input type="checkbox" />
          Rs. 7001+
        </label>
      </section>
      <section className="type_container">
        <h3 className="py-1">Type</h3>
        <label className="d-block" htmlFor="loafers">
          <input type="checkbox" />
          Loafers
        </label>
        <label className="d-block" htmlFor="sneakers">
          <input type="checkbox" />
          Sneakers
        </label>
      </section>
      <section>
        <button className="primary-btn p-1 d-block my-2 filter-btn mx-auto">
          Clear Filter
        </button>
      </section>
    </main>
  );
};

export { Filter };
