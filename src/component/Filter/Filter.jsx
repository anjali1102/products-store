import React from "react";
import { FiFilter } from "react-icons/fi";

const Filter = () => {
  return (
    <main className="filter_wrapper">
      <section className="filter_header">
        <h1>FILTERS</h1>
        <FiFilter size={30} />
      </section>
      <section className="cost_container">
        <h3>Cost</h3>
        <label>
          <input type="checkbox" />
          Rs. 1500 - 4000
        </label>
        <label>
          <input type="checkbox" />
          Rs. 4001 - 7000
        </label>
        <label>
          <input type="checkbox" />
          Rs. 7001+
        </label>
      </section>
      <section className="type_container">
        <h3>Type</h3>
        <label>
          <input type="checkbox" />
          Loafers
        </label>
        <label>
          <input type="checkbox" />
          Sneakers
        </label>
      </section>
      <section>
        <button>Clear Filter</button>
      </section>
    </main>
  );
};

export { Filter };
