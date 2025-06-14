import React, { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";

export default function CategoryButtons({activeCategory, onCategoryClick }) {
  const inactiveStyle = {
    backgroundColor: "#FFC236",
    boxShadow: " 4px 4px 6px rgba(58, 187, 82, 0.7)",
    border: "none",
    outline: "none",
    fontSize: "x-large",
  };
  const activeStyle = {
    backgroundColor: "#40C057",
    boxShadow: "none",
    border: "none",
    outline: "none",
    fontSize: "x-large",
    transition: "2s",
  };

  // let [activeCategory, setActiveCategory] = useState(null);

  // function onCategoryClick(category) { 
  //   setActiveCategory(category);
  // }

  return (
    <>
      <div className="container w-100 mt-5 pt-5">
        <div className="d-flex  w-100 flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
          <div className="d-flex flex-row gap-2 flex-wrap justify-content-center mb-3 mb-lg-0"> 
           
            <button
              className="btn btn-lg ps-3 pe-3 ps-md-4 pe-md-4"
              onClick={() => onCategoryClick("خطبه ها")}
              style={activeCategory === "خطبه ها" ? activeStyle : inactiveStyle}
            >
              خطبه ها{" "}
            </button>
             <button
              className="btn btn-lg p-2 ps-3 pe-3 ps-md-4 pe-md-4"
              onClick={() => onCategoryClick("نامه ها")}
              style={activeCategory === "نامه ها" ? activeStyle : inactiveStyle}
            >
              نامه ها
            </button>
            <button
              className="btn btn-lg ps-3 pe-3 ps-md-4 pe-md-4"
              onClick={() => onCategoryClick("حکمت ها")}
              style={activeCategory === "حکمت ها" ? activeStyle : inactiveStyle}
            >
              حکمت ها
            </button>
          </div>

          <div className="dropdown">
            <CategoryDropdown></CategoryDropdown>
          </div>

        </div>
      </div>
    </>
  );
}