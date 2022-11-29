import React from "react";
import { useFilter } from "../../context/filter-context";
import "./ColorFilter.css";

const ColorFilter = () => {
  const {
    filterDispatch,
    filterState: { filterColorBlack, filterColorByWhite },
  } = useFilter();
  return (
    <main className="colorFilter_wrapper">
      <h3 className="headings subheading filter-title  pb-1">Colors</h3>
      <div className="colors_small_boxes">
        <div className="color-box1"></div>
        <div className="color-box2"></div>
      </div>
    </main>
  );
};

export { ColorFilter };
